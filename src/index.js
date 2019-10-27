import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'


const Away = () => {
  return (
    <div>
      <h1>Away!</h1>
      <h4>This is my away page</h4>
    </div>
  );
};


ReactDOM.render((
  <Router>
    <div>
      <Navbar/>
    <Route exact path="/" component={Home} />
    <Route exact path="/away" component={Away} />
    <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  
  document.getElementById('root')
)