import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
