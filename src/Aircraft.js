import React, { Component } from 'react';

class Aircraft extends Component {
  render() {
    return (
      <div className="w-3/4 m-auto mb-8 p-10 bg-gray-100 relative rounded shadow">
        <hr className="block mb-6 mt-8 w-8 border-blue-600 h-0 border-t-2" />
        <h2 className="z-10 relative text-2xl text-gray-900 absolute font-bold">
          MY AIRCRAFT
        </h2>
        <hr className="block mb-6 mt-10 w-8 border-blue-600 h-0 border-t-2" />
      </div>
    );
  }
}

export default Aircraft;
