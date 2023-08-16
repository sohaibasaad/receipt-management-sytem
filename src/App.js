import React from "react";
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Login from './pages/Login.js'
import Home from './pages/Home.js';
import TotalPayment from './pages/TotalPayment.js'
import VerifyPayment from './pages/VerifyPayment.js'

function App() {
  const location = useLocation();
  const { pathname } = location;
  const noHeaderPaths = ['/login', '', '/', '/logout'];
  const showHeader = !noHeaderPaths.includes(pathname);

  return (
    <div className="App">
      {showHeader && <Header />}
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/total-payments" element={<TotalPayment />} />
        <Route exact path="/verify-payment" element={<VerifyPayment />} />
      </Routes>
    </div >
  );
}

export default App;
