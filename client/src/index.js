import React from 'react'
import ReactDOM from 'react-dom'
// import Form from './components/Form'
import './App.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

// const form = {
//   companyName: "Sony",
//   jobTitle: "Software Engineer",
//   location: "New York",
//   jobType: "Full Time",
//   appliedThrough: "Indeed",
//   remindDate:"September 10, 2020"
// }




//   <Form 
//     companyName= {form.companyName}
//     jobTitle= {form.jobTitle}
//     location= {form.location}
//     jobType= {form.jobType}
//     appliedThrough= {form.appliedThrough}
//     remindDate= {form.remindDate}
//   />,

ReactDOM.render(<App />, document.getElementById('root'));
