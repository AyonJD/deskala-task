import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import AddCandidate from './Components/Home/AddCandidate/AddCandidate';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
        <Route path='create-candidate' element={<AddCandidate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
