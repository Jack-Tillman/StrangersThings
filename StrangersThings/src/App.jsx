import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import  Login  from './components/Login';
import  Register  from './components/Register';
import './App.css'
import Profile from './components/Profile';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:login" element={<Login />} />
        <Route path="/:register" element={<Register />} />
        <Route exact path="/profile" element={
          <Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )}


export default App;
