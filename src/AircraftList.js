import React, { Component } from 'react';

class AircraftList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { aircraft } = this.props;
    const myAircraft = aircraft.map(item => {
      return (
        <div key={item.aircraftRegistration}>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">YEAR</th>
                <th className="px-4 py-2">MODEL</th>
                <th className="px-4 py-2">REGISTRATION</th>
                <th className="px-4 py-2">HOURS</th>
                <th className="px-4 py-2">CURRENT STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{item.aircraftYear}</td>
                <td className="border px-4 py-2">{item.aircraftModel}</td>
                <td className="border px-4 py-2">
                  {item.aircraftRegistration}
                </td>
                <td className="border px-4 py-2">{item.aircraftHours}</td>
                <td className="border px-4 py-2">{item.aircraftStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });

    return <div>{myAircraft}</div>;
  }
}

export default AircraftList;
