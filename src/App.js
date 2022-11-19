import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddFriendModal from './components/Modals/AddFriendModal';
import Signup from './components/Signup';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<ChatRoom />} path="/chat" />
      <Route element={<Signup />} path="/signup" />
    </Routes>
    {/* <AddFriendModal /> */}
  </BrowserRouter>
}

export default App;
