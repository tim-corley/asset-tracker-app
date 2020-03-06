import React, { Component } from 'react';

class AircraftList extends Component {
  render() {
    const { aircraft } = this.props;
    const myAircraft = aircraft.map(item => {
      return (
        <div
          key={item.aircraftRegistration}
          className="flex items-center justify-center"
        >
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white md:rounded-lg crounded-none overflow-hidden sm:shadow-lg my-5">
              <thead className="text-left text-white">
                <tr className="bg-blue-600 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <th className="border border-blue-600 px-4 py-2">YEAR</th>
                  <th className="border border-blue-600 px-4 py-2">MODEL</th>
                  <th className="border border-blue-600 px-4 py-2">
                    REGISTRATION
                  </th>
                  <th className="border border-blue-600 px-4 py-2">HOURS</th>
                  <th className="border border-blue-600 px-4 py-2">
                    CURRENT STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 sm:flex-none">
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border px-4 py-2">
                    {item.aircraftYear}
                  </td>
                  <td className="border-grey-light border px-4 py-2">
                    {item.aircraftModel}
                  </td>
                  <td className="border-grey-light border px-4 py-2">
                    {item.aircraftRegistration}
                  </td>
                  <td className="border-grey-light border px-4 py-2">
                    {item.aircraftHours}
                  </td>
                  <td className="border-grey-light border px-4 py-2">
                    {item.aircraftStatus}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    });

    return <div>{myAircraft}</div>;
  }
}

export default AircraftList;
