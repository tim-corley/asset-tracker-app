import React, { Component } from 'react';
import { GiTargeting } from 'react-icons/gi';
import { Link } from '@reach/router';

class Navigation extends Component {
  render() {
    const { user, logoutUser } = this.props;
    return (
      <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
        <Link
          to="/"
          className="flex items-center flex-shrink-0 text-white mr-6"
        >
          <span className="text-3xl pr-2">
            <GiTargeting />
          </span>
          <span className="font-semibold text-xl tracking-tight">
            Asset Tracker
          </span>
        </Link>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {!user && (
              <Link
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-900 mr-4"
              >
                Login
              </Link>
            )}
            {!user && (
              <Link
                to="/register"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-900 mr-4"
              >
                Register
              </Link>
            )}
            {user && (
              <Link
                to="/aircraft"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-900 mr-4"
              >
                My Aircraft
              </Link>
            )}
          </div>
          <div>
            {user && (
              <Link
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-900 mr-4"
                onClick={e => logoutUser(e)}
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
