import React, { Component } from 'react';
import { GiAirplane } from 'react-icons/gi';
import { Link } from '@reach/router';

class Home extends Component {
  render() {
    const { user } = this.props;
    return (
      <section className="w-3/6 m-auto flex flex-wrap mt-20">
        <div className="flex flex-wrap">
          <div className="w-full mb-8 p-10 bg-gray-100 relative rounded shadow">
            <hr className="block mb-6 mt-8 w-8 border-blue-600 h-0 border-t-2" />
            <span className="text-gray-300 text-6xl absolute italic right-10 mt-6">
              <GiAirplane />
            </span>
            <h2 className="z-10 relative text-2xl text-gray-900 absolute font-bold">
              ASSET TRACKER
            </h2>
            <hr className="block mb-6 mt-10 w-8 border-blue-600 h-0 border-t-2" />
            <p className="text-gray-800 mb-10">
              Welcome to the Asset Tracker! Login or Register to view the
              real-time status of your asset(s).
            </p>
            {user == null && (
              <span>
                <Link
                  to="/login"
                  className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-5 border border-blue-500 hover:border-transparent rounded"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-5 border border-blue-500 hover:border-transparent rounded"
                >
                  Register
                </Link>
              </span>
            )}
            {user && (
              <Link
                to="/aircraft"
                className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                My Aircraft
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
