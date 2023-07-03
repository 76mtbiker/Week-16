import React from 'react';
import './App.css';
import About from './Aboutme'
import Home from './Home'
import Learncode from './Learncode'








import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/Learncode">Learn to code</Link>
            </li>
            
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Learncode">
            <Learncode />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      
        
        </Switch>
      </div>
    </Router>
  );
  }

 

