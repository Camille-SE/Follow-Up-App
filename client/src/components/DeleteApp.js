import React, { Component } from 'react';
import {deleteApplication} from '../userActions/index';
import App from "../App";
import axios from "axios"


class DeleteApp extends Component {
    constructor(props) {
        super(props)
    }
    deleteApplication(id) {
        axios.delete(`http://localhost:3001/api/v1/forms/${id}`)
        .then(res => {
            console.log(res.data)
            alert("You've just deleted a job application! Please refresh your screen.")
        })  .catch(error=>console.log(error))
    }    
    render() {
        console.log(this.props.id)
        return(<div className="list-item delete-button" onClick = {() => 
        this.deleteApplication(this.props.id)}>X
                </div>)
    }
} 

export default DeleteApp;
