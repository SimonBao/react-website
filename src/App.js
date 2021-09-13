import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Service from './components/Common/Service';
import Portfolio from './components/Common/Portfolio';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component{
  render() {
    return (
      <Router>
        <PageWrapper>
            <Route 
              exact={true}
              path="/"
              component={Home}
            />

            <Route 
              path="/about"
              component={About}
            />

            <Route 
              path="/services"
              component={Service}
            />

            <Route 
              path="/portfolio"
              component={Portfolio}
            />

        </PageWrapper>
    </Router>
    )
  }
}

export default App;
