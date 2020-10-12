import React from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Form from '../components/Form';
import Login from '../components/auth/Login';
import Registration from '../components/auth/Registration';
import { BrowserRouter as Router, Switch, Route} from'react-router-dom';
import Userapps from '../components/Userapps';


function Routes(props) {
    return (
      <Router>
      <div className="App">
        <Nav handleLogout={props.handleLogout}/>
        <Switch>
          {/* Do we need a route for the nav? */}
          <Route path="/" exact component={Home}/>
          <Route path="/form" component={Form}/>
          <Route path="/userapps" component={Userapps}/>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
      </Router>
    );
  }

  export default Routes;