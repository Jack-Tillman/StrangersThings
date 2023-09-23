import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import  Home  from './components/Home';
import  Login  from './components/Login';
import  Register  from './components/Register';
import './App.css'
import Searchbar from './components/Searchbar'

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home token={token} />} />
      <Route path="/login" element={<Login token={token} setToken={setToken} />} />
      <Route path="/register" element={<Register token={token} setToken={setToken}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )}


export default App;
