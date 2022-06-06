import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
