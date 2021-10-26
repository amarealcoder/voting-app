// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import { Route } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './pages/Register';
import Vote from './pages/Vote';


function App() {
 return(
   <Router>
     <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/Vote">
        <Vote />
      </Route>
     </Switch>
   </Router>
 )
}

export default App;
