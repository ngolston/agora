import React from "react";
/*import Logo from "./assets/AgoraLogo.png"*/
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
      {/* <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Communities" exact>
          <Communities />
          <Route path="/CreatePost" exact>
            <CreatePost />
          </Route>
        </Route>
      </Switch> */}

    </Router>

  )
}

export default App;







