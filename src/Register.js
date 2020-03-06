import React, { Component } from 'react';
import firebase from './Firebase';
import ErrorMsg from './ErrorMsg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      pwdOne: '',
      pwdTwo: '',
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.pwdOne
    };
    e.preventDefault();
    if (this.state.pwdOne !== this.state.pwdTwo) {
      this.setState({
        errorMessage: 'Passwords Do Not Match!',
        pwdOne: '',
        pwdTwo: ''
      });
    } else {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              registrationInfo.email,
              registrationInfo.password
            );
        })
        .then(() => {
          let fullName =
            registrationInfo.firstName + ' ' + registrationInfo.lastName;
          this.props.registerUser(fullName);
        })
        .catch(error => {
          if (error.message !== null) {
            this.setState({ errorMessage: error.message });
          } else {
            this.setState({ errorMessage: null });
          }
        });
    }
  }

  render() {
    return (
      <section className="m-auto flex flex-wrap mt-20">
        <div className="w-1/2 mx-auto mb-8 p-10 bg-gray-100 relative rounded shadow">
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
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Email Address
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
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="pwdOne"
                placeholder="******************"
                value={this.state.pwdOne}
                onChange={this.handleChange}
              />
              <p className="text-red-500 text-xs italic">
                Please input a password.
              </p>
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                type="password"
                name="pwdTwo"
                placeholder="******************"
                value={this.state.pwdTwo}
                onChange={this.handleChange}
              />
              <p className="text-red-500 text-xs italic">
                Input password again to confirm.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;
