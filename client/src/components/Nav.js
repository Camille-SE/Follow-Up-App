import React from "react";
import { Link } from "react-router-dom";



function Nav(props) {
    // handleLogout e.preventDefault then log person out and return a redirect back to Login page
    
    return (
        <nav className="Navbar" style={{textShadow: "2px 2px black"}}>
            <div className="Navlogo">
                <Link to='/'><h3 style={{color: "antiquewhite"}}>Follow Up</h3></Link>
            </div>
                <ul className="listbox">
                    <li className="loginItem"><Link to={'/login'}> <h4 style={{color: "antiquewhite"}}>Login</h4></Link></li>
                    <li className="regItem"><Link to={'/registration'}> <h4 style={{color: "antiquewhite"}}>Register</h4></Link></li>
                    {/* change to be some sort of link or clickable button with onClick = {handleLogout} */}
                    <li className="logoutItem"><Link to={'/'} onClick={props.handleLogout}> <h4 style={{color: "antiquewhite"}}>Logout</h4></Link></li>
                    {localStorage.getItem('id')? <li className="myAppslist"><Link to={'/userapps'} ><h4 style={{color: "antiquewhite"}}>Apps</h4></Link></li>:''}
                    {localStorage.getItem('id')? <li className="newForm"><Link to={'/form'} > <h4 style={{color: "antiquewhite"}}>Form</h4></Link></li>:''}
                </ul>
        </nav >
    );
}



export default Nav;