import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  // are lines 6 & 7 needed or can we refactor when complete?
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/api/v1/auth/login",
        {
            email: email,
            password: password
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          // this.props.handleSuccessfulAuth(response.data);
          console.log("sucessful login")
        }
        this.props.history.push("/userapps")
      })
      .catch(error => {
        console.log("login error", error);
      });
   
  }

  render() {
    return (
      <div className= "log">
        <form onSubmit={this.handleSubmit} className='loginform'>
          <h1 style={{textShadow: "2px 2px antiquewhite"}}>Welcome Back</h1>
          <p style={{top: "14px"}}>Email: </p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          /> 
        
          <p style={{top: "14px"}}>Password: </p>
          <input style={{left: "20px"}}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button style={{left: "25px"}} className="logbutton" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;