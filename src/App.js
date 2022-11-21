import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Error from "./components/Error";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path="/"/>
            <Route element={<Signup />} path="/register" />
            <Route element={<ChatRoom/>} path="/chat"></Route>
            {/* <Route element={<Error />} path="*" /> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
