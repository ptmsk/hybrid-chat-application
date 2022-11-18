import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddFriendModal from './components/Modals/AddFriendModal';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route component={<Login />} path="/login" />
      <Route component={<ChatRoom />} path="/" />
    </Routes>
    <AddFriendModal />
  </BrowserRouter>

  // return <Login />
  // return <ChatRoom />
  // return <AddFriendModal />
}

export default App;
