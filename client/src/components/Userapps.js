import React, { Component } from "react";
import axios from 'axios';
// import moment from 'moment';
import Details from './Details'

// this is where axios.GET request will be made ADD CREDENTIALS


class Userapps extends Component {
  state = {
    form: [] 
  }
  componentDidMount() {
  axios.get("http://localhost:3001/api/v1/forms",{
    withCredentials: true
  })
  .then(res => {
    console.log(res)
    console.log(res.data.forms)
    this.setState({
      
      form: res.data.forms,
      
    })
  }

  )}
handleClick = this.state.form
  render () {
    console.log(this.state.form)
    // const apps = this.state.form.map()
    return (
      <>

      <div className= "apppage">
        <h1 className= "myAppsTitle">
          Here are your apps:
        </h1>
      </div>

    {this.state.form && this.state.form.map((app) => <Details app = { app } />)}
      </>
    )
  }
}




export default Userapps;