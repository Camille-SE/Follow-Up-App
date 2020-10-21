import React, { Component } from "react";
import DeleteApp from "./DeleteApp";
import App from "../App";

class Details extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        userForm: [],
        clicked: false
    }
    handleClick() {
        this.setState({
            clicked: ! this.state.clicked
        }) 
        console.log(this.state.clicked)
    }
    
    render() {
        return(
            <div>
                <button onClick={()=>this.handleClick()} className="appList"> 
                { this.props.app.name } {"\n"} { this.props.app.title } </button>
                {!this.state.clicked ? "": (
                    <div className="formDetails" style={{fontWeight: "bold"}}>Company Name: { this.props.app.name } {"\n"} Job Title: { this.props.app.title } {"\n"}
                    Job Location: {this.props.app.location} {"\n"} Date of Application: {this.props.app.appdate} {"\n"} Date to Follow up: {this.props.app.followupdate}
                        <DeleteApp id={this.props.app._id}/>
                    </div>
                 )}
            </div>
        )
    }
        
}
 

export default Details;