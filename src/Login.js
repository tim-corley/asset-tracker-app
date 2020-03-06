import React, { Component } from 'react';
import firebase from './Firebase';
import ErrorMsg from './ErrorMsg';
import { navigate } from '@reach/router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    let registrationInfo = {
      email: this.state.email,
      password: this.state.password
    };
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        navigate('/aircraft');
      })
      .catch(error => {
        if (error.message !== null) {
          this.setState({ errorMessage: error.message });
        } else {
          this.setState({ errorMessage: null });
        }
      });
  }

  render() {
    return (
      <section className="m-auto flex flex-wrap mt-8 lg:mt-20">
        <div className="w-11/12 md:w-1/2 mx-auto mb-8 p-4 md:p-10 bg-gray-100 relative rounded shadow">
          {this.state.errorMessage !== null ? (
            <ErrorMsg errorMessage={this.state.errorMessage} />
          ) : null}
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={this.handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
                name="email"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:placeholder-transparent focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-600 text-white text-center block w-full md:w-auto md:inline hover:bg-transparent font-semibold hover:text-blue-600 py-2 px-4 my-4 md:mr-5 border border-transparent hover:border-blue-600 rounded"
                type="submit"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
