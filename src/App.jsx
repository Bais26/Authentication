import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Register from './Component/Register'
import Login from './Component/Login'


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </Routes>
  </Router>
  )
}

export default App
