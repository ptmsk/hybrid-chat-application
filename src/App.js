import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddFriendModal from "./components/Modals/AddFriendModal";
import Signup from "./components/Signup";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [isLogin, setisLogin] = useState(localStorage.getItem("user"));  

  const handleLogin = () => {
    setisLogin(true);
  };

  const handleLogout = () => {
    setisLogin(false);
  };

  return (
    <>
      {!isLogin && (
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path="/" setisLogin={setisLogin}/>
            <Route element={<Signup />} path="/register" />
            <Route element={<Error />} path="*" />
          </Routes>
        </BrowserRouter>
      )}
      {!isLogin || (
        <BrowserRouter>
          <Routes>
            <Route element={<ChatRoom />} path="/chat/" handleLogout={handleLogout}/>
            <Route element={<Error />} path="*" />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
