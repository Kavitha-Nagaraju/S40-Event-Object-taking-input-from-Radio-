import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signupform" element={<SignupForm/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
