import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { userName, userID } = this.props;
    return (
      <div className="m-auto my-4 max-w-sm rounded border-2 border-blue-600">
        <div className="text-center px-6 py-4">
          <div className="font-bold text-xl mb-2">Welcome {userName} 👋</div>
          <div className="text-gray-900 font-light">
            <b>Your ID:</b> {userID}
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
