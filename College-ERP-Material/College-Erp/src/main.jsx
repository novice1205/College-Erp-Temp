import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin.jsx';
import Home from './pages/Home.jsx';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
