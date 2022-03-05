import React from "react";
import Home from "./pages/home/home";
import Communities from "./pages/Communities/Communities";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SidebarTop from "./components/SidebarTop/SidebarTop";

function App() {
  return (

    <Router>
      <div>
        <>
          <Navbar />
          <SidebarTop />
        </>
      </div>
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
          </Switch>
        </>
      </div>
    </Router>

  )
}

export default App;







