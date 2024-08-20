import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedComponent from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Update from './pages/Update';
import Market from './pages/Market';
import Purchases from './pages/Purchases';
import Create from './pages/Create';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<ProtectedComponent><Dashboard/></ProtectedComponent>} ></Route>
        <Route path='/create' element={<ProtectedComponent><Create/></ProtectedComponent>} ></Route>
        <Route path='/update/:id' element={<ProtectedComponent><Update/></ProtectedComponent>} ></Route>
        <Route path='/market' element={<ProtectedComponent><Market/></ProtectedComponent>} ></Route>
        <Route path='/purchases' element={<ProtectedComponent><Purchases/></ProtectedComponent>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
