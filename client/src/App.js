import React from "react";
<<<<<<< HEAD
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






=======
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
};
>>>>>>> 048bb9e1387fa39d3fdc8a65e7f8227b4bbbbb77

export default App;
