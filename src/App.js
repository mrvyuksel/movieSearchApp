import React, { Component } from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/home";
import Details from "./details/details";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="top-nav">
            <Link to="/">Home</Link>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/details/:imdbId" component={Details} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
