import React from "react";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      currentView: "Signup",

      signup: {
        username: "",
        email: "",
        password: ""
      },

      login: {
        usernameOrEmail: "",
        password: ""
      },

      reset: {
        email: ""
      },

      errors: {}

    };
  }



  // Change Pages
  chnageView = (view) => {

    this.setState({
      currentView: view,
      errors: {}
    });

  };




  // Input Typing
  handleChange = (formName, field, value) => {

    this.setState({

      [formName]: {
        ...this.state[formName],
        [field]: value,
      }

    });

  };





  // Signup Validation
  validateSignup = () => {

    let errors = {};

    if (!this.state.signup.username) {
      errors.username = "Username is required";
    }

    if (!this.state.signup.email) {
      errors.email = "Email is required";
    }

    if (!this.state.signup.password) {
      errors.password = "Password is required";
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };






  // Login Validation
  validateLogin = () => {

    let errors = {};

    if (!this.state.login.usernameOrEmail) {
      errors.usernameOrEmail =
        "Username or Email is required";
    }

    if (!this.state.login.password) {
      errors.loginPassword =
        "Password is required";
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };






  // Reset Validation
  validateReset = () => {

    let errors = {};

    if (!this.state.reset.email) {
      errors.resetEmail = "Email is required";
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };







  // Signup Page
  renderSignup() {

    return (

      <div>

        <h2>Signup Page</h2>

        <input
          type="text"
          placeholder="Username"
          value={this.state.signup.username}
          onChange={(e) =>
            this.handleChange(
              "signup",
              "username",
              e.target.value
            )
          }
        />

        <p className="error">
          {this.state.errors.username}
        </p>





        <input
          type="email"
          placeholder="Email"
          value={this.state.signup.email}
          onChange={(e) =>
            this.handleChange(
              "signup",
              "email",
              e.target.value
            )
          }
        />

        <p className="error">
          {this.state.errors.email}
        </p>





        <input
          type="password"
          placeholder="Password"
          value={this.state.signup.password}
          onChange={(e) =>
            this.handleChange(
              "signup",
              "password",
              e.target.value
            )
          }
        />

        <p className="error">
          {this.state.errors.password}
        </p>





        <button onClick={() => {

          if (this.validateSignup()) {

            alert("Signup Done");

          }

        }}>
          Signup
        </button>





        <button
          onClick={() =>
            this.chnageView("Login")
          }
        >
          Already Account ?
        </button>

      </div>
    );
  }








  // Login Page
  renderLogin() {

    return (

      <div>

        <h2>Login Page</h2>

        <input
          type="text"
          placeholder="Username or Email"
          value={this.state.login.usernameOrEmail}
          onChange={(e) =>
            this.handleChange(
              "login",
              "usernameOrEmail",
              e.target.value
            )
          }
        />

        <p className="error">
          {this.state.errors.usernameOrEmail}
        </p>






        <input
          type="password"
          placeholder="Password"
          value={this.state.login.password}
          onChange={(e) =>
            this.handleChange(
              "login",
              "password",
              e.target.value
            )
          }
        />

        <p className="error">
          {this.state.errors.loginPassword}
        </p>






        <button onClick={() => {

          if (this.validateLogin()) {

            alert("Login Done");

          }

        }}>
          Login
        </button>






        <button
          onClick={() =>
            this.chnageView("Signup")
          }
        >
          Create Account
        </button>






        <p
          className="forgot"
          onClick={() =>
            this.chnageView("Reset")
          }
        >
          Lost your password?
        </p>

      </div>
    );
  }








  // Reset Page
  renderReset() {

    return (

      <div>

        <h2>Password Reset</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={this.state.reset.email}
          onChange={(e) =>
            this.handleChange(
              "reset",
              "email",
              e.target.value
            )
          }
        />

        <p className="error">
          {this.state.errors.resetEmail}
        </p>






        <button onClick={() => {

          if (this.validateReset()) {

            alert("Reset Link Sent");

          }

        }}>
          Send Reset Link
        </button>






        <button
          onClick={() =>
            this.chnageView("Login")
          }
        >
          Back To Login
        </button>

      </div>
    );
  }









  render() {

    return (

      <div className="container">

        {/* Sidebar */}
        <div className="sidebar">

          <h2>Auth Panel</h2>

          <button
            onClick={() =>
              this.chnageView("Signup")
            }
          >
            Signup
          </button>

          <button
            onClick={() =>
              this.chnageView("Login")
            }
          >
            Login
          </button>

          <button
            onClick={() =>
              this.chnageView("Reset")
            }
          >
            Reset
          </button>

        </div>





        {/* Main Content */}
        <div className="main-content">

          <div className="card">

            {this.state.currentView === "Signup" &&
              this.renderSignup()}

            {this.state.currentView === "Login" &&
              this.renderLogin()}

            {this.state.currentView === "Reset" &&
              this.renderReset()}

          </div>

        </div>

      </div>
    );
  }
}

export default App;