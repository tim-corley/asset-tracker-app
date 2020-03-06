import React, { Component } from 'react';
import { Link } from '@reach/router';

class Welcome extends Component {
  render() {
    const { userName, logoutUser } = this.props;
    return (
      <div className="m-auto my-4 max-w-sm rounded border-2 border-blue-600">
        <div className="text-center px-6 py-4">
          <div className="font-bold text-xl mb-2">Welcome {userName} 👋</div>
          <Link
            to="/login"
            className="text-gray-900 font-light"
            onClick={e => logoutUser(e)}
          >
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
