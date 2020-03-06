import React, { Component } from 'react';
import { GiTargeting } from 'react-icons/gi';
import { Link } from '@reach/router';

class NavigationNew extends Component {
  render() {
    const { user, logoutUser } = this.props;
    return (
      <section className="lg:px-16 px-6 bg-blue-600 flex flex-wrap items-center lg:py-6 py-8">
        <div className="flex-1 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            <span className="text-3xl pr-2">
              <GiTargeting />
            </span>
            <span className="font-semibold text-2xl tracking-tight">
              Asset Tracker
            </span>
          </Link>
        </div>

        <label for="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
              {!user && (
                <Link
                  to="/login"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-t-2 border-transparent text-white hover:text-blue-200 hover:border-blue-200"
                >
                  Login
                </Link>
              )}
              {!user && (
                <Link
                  to="/register"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-t-2 border-transparent text-white hover:text-blue-200 hover:border-blue-200"
                >
                  Register
                </Link>
              )}
              {user && (
                <Link
                  to="/aircraft"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-t-2 border-transparent text-white hover:text-blue-200 hover:border-blue-200"
                >
                  My Aircraft
                </Link>
              )}
              {user && (
                <Link
                  to="/"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-t-2 border-transparent text-white hover:text-blue-200 hover:border-blue-200"
                  onClick={e => logoutUser(e)}
                >
                  Logout
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default NavigationNew;
