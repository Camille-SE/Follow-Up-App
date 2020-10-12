import React, { Component} from 'react';
import './App.css';
import Routes from './config/routes'
import axios from "axios"



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      title: '',
      location:'',
      appDate:'',
      followUpDate:''
    };
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/api/v1/auth/logout", { withCredentials: true })
      .then(response => {
      // destroy the user id in local storage 
      })
      
      .catch(error => {
        console.log("logout error", error);
      });
  }


      render() {
        return (
          <Routes handleLogout={this.handleLogoutClick}/>
          // Pass user = {props.user} to nav or header or wherever nav lives
         
        )
      } 
}


export default App;
