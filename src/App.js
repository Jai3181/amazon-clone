import React from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header";
import HomePage from "./HomePage"
import Checkout from "./Checkout"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* this is default */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
