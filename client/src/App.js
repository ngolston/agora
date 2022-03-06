import React from "react";

import "./App.css";
import Home from "./pages/home/home";
import Communities from "./pages/Communities/Communities";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";

function App() {
  return (

    <Router>

      <div>
        <>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Communities">
              <Communities />
            </Route>
            <Route exact path="/CreatePost">
              <CreatePost />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </>
      </div>
    </Router>

  )
}

export default App;
