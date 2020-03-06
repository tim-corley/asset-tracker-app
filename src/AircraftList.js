import React, { Component } from 'react';
import firebase from './Firebase';
import { navigate } from '@reach/router';

class AircraftList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { aircraft } = this.props;
    const myAircraft = aircraft.map(item => {
      return (
        <div key={item.aircraftID}>
          <section>{item.model}</section>
        </div>
      );
    });

    return <div>{myAircraft}</div>;
  }
}

export default AircraftList;
