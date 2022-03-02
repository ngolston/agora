import React from "react";
import Home from "./pages/home/home";
import { useState, useEffect } from "react";
import axios from 'axios';
import PostFormModalCon from "../src/components/Post/PostFormModalCon"
// import Modal from "../src/components/Modal/Modal";
// import { AccountCircleIcon } from '@mui/icons-material/AccountCircle';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {

    axios.get('http://localhost:4000/user', { withCredentials: true })
      .then(response => setUser(response.data));

  }, []);
  function logout() {
    axios.post('http://localhost:4000/logout', {}, { withCredentials: true })
      .then(() => setUser({}));
  }

  return (
    <AuthModalCon.Provider value={{ show: showAuthModal, setShow: setShowAuthModal }}>
      <PostFormModalCon.Provider value={{ show: showPostFormModal, setShow: setShowPostFormModal }}>
        <UserContext.Provider value={{ ...user, logout, setUser }}>
          <Home />
        </UserContext.Provider>
      </PostFormModalCon.Provider>
    </AuthModalCon.Provider>
  );
}

export default App;







