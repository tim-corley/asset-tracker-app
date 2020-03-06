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
          .ref(sheetID + 'aircraft/' + FBUser.uid + '/aircraft');
        // WHEN DATA CHANGES, CAPTURE SNAPSHOT
        aircraftRef.on('value', snapshot => {
          let aircraft = snapshot.val();
          let aircraftList = [];

          for (let item in aircraft) {
            aircraftList.push({
              aircraftID: item,
              aircraftName: aircraft[item].aircraftName
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
      FBUser.updateProfile({ displayName: userName }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        // (USING REACH ROUTER METHOD) ONCE STATE IS SET, GO TO MEETINGS
        navigate('/aircraft');
      });
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
        navigate('/login');
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
            userID={this.state.userID}
          />
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </>
    );
  }
}

export default App;
