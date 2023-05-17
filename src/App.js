import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ForgotPW from './pages/Forgot Password';
import SignUp from './pages/Sign Up';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/forgotPassword' element={<ForgotPW />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
  
}

export default App;



