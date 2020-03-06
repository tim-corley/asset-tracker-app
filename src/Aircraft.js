import React, { Component } from 'react';
import AircraftList from './AircraftList';

class Aircraft extends Component {
  render() {
    return (
      <div className="w-5/6 m-auto mb-8 py-10 px-4 bg-gray-100 relative rounded shadow">
        <hr className="block mb-6 mt-8 w-8 border-blue-600 h-0 border-t-2" />
        <h2 className="z-10 relative text-2xl text-gray-900 absolute font-bold">
          MY AIRCRAFT
        </h2>
        <hr className="block mb-6 mt-10 w-8 border-blue-600 h-0 border-t-2" />
        {this.props.aircraft && this.props.aircraft.length ? (
          <AircraftList aircraft={this.props.aircraft} />
        ) : (
          <div className="font-thin text-xl">
            There is currently no aircraft associated to your account. Please
            contact an admin in order to have this account linked with your
            aircraft.
          </div>
        )}
      </div>
    );
  }
}

export default Aircraft;
