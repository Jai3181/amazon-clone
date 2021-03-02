import React, {useEffect} from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header";
import HomePage from "./HomePage"
import Checkout from "./Checkout"
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"

function App() {
  const [{user}, dispatch] = useStateValue();

  // useEffect <<<<<< creating a listener to get logged in or logged out
  // Piece of code that runs based on a  given condition
  useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    });
    return () => {
      unsubscribe();
    }
  },[])

  console.log(user)

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
            {/* <Header /> */}
            <Login />
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
