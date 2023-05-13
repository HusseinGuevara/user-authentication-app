import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ForgotPW from './pages/Forgot Password';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/forgotPassword' element={<ForgotPW />} />
    </Routes>
  );
  
}

export default App;



