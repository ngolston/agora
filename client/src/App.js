import React from "react";
import Home from "./pages/home/home";
import { useState, useEffect } from "react";
import axios from 'axios';
import PostFormModalCon from "../src/components/Post/PostFormModalCon"
import Register from "./components/Register/Register";
import UserCon from "./components/UserCon";


function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {

    axios.get('http://localhost:3001/user', { withCredentials: true })
      .then(response => setUser(response.data));

  }, []);
  function logout() {
    axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
      .then(() => setUser({}));
  }

  return (
    <Register.Provider value={{ show: showRegister, setShow: setShowRegister }}>
      <PostFormModalCon.Provider value={{ show: showPostFormModal, setShow: setShowPostFormModal }}>
        <UserCon.Provider value={{ ...user, logout, setUser }}>
          <Home />
        </UserCon.Provider>
      </PostFormModalCon.Provider>
    </Register.Provider>
  );
}

export default App;







