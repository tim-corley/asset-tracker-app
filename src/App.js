import React, { Component } from 'react';
import Home from './Home';
import Navigation from './Navigation';
import Aircraft from './Aircraft';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import './styles/app.css';
import firebase from './Firebase';
import { Router, navigate } from '@reach/router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        const sheetID = '1HhuuTzpLdvSnhXPfQDuhp0NxgKutSFOpHyB9mXAk3Ts/';
        const aircraftRef = firebase
          .database()
          .ref(sheetID + 'aircraft/' + FBUser.uid);
        // WHEN DATA CHANGES, CAPTURE SNAPSHOT
        aircraftRef.on('value', snapshot => {
          let aircraft = snapshot.child('aircraft').val();
          let aircraftList = [];

          for (let item in aircraft) {
            aircraftList.push({
              aircraftYear: aircraft[item].year,
              aircraftModel: aircraft[item].model,
              aircraftRegistration: aircraft[item].registration,
              aircraftHours: aircraft[item].hours,
              aircraftStatus: aircraft[item].currentStatus
            });
          }
          this.setState({
            aircraft: aircraftList,
            aircraftCount: aircraftList.length
          });
        });
      } else {
        this.setState({ user: null });
      }
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser != null) {
        console.log('UPDATE PROFILE...');
        FBUser.updateProfile({ displayName: userName }).then(() => {
          this.setState({
            user: FBUser,
            displayName: FBUser.displayName,
            userID: FBUser.uid
          });
          navigate('/aircraft');
        });
      }
    });
  };

  logoutUser = e => {
    e.preventDefault();
    this.setState({
      user: null,
      displayName: null,
      userID: null
    });
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/');
      });
  };

  render() {
    return (
      <>
        <Navigation user={this.state.user} logoutUser={this.logoutUser} />
        {/* ONLY SHOW WELCOME COMPONENT IF THERE IS A USER IN STATE*/}
        {this.state.user && (
          <Welcome
            userName={this.state.displayName}
            logoutUser={this.logoutUser}
          />
        )}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Aircraft
            path="/aircraft"
            aircraft={this.state.aircraft}
            user={this.state.user}
          />
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </>
    );
  }
}

export default App;
