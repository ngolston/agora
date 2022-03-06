import React from "react";

import "./App.css";
import Home from "./pages/home/home";
import Communities from "./pages/Communities/Communities";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login"
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"


const link = from([
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
    <ApolloProvider client={client}>
      {""}
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
                <RegisterPage />
              </Route>
              <Route exact path="/Profile">
                <Profile />
              </Route>
            </Switch>
          </>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;







