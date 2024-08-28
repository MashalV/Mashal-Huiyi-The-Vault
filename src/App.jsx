import { useState } from 'react'
import Logo from './assets/logo.png'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ResultPage from './pages/ResultPage/ResultPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Result" element={<ResultPage/>}></Route>  
      </Routes>
    </BrowserRouter>
    );
  }

export default App
