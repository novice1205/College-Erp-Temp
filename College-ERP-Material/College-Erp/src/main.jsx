import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ClientList from './pages/ClientList.jsx';
import ModuleList from './pages/ModuleList.jsx';
import TestPage from './pages/TestPage.jsx';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ClientList" element={<ClientList />} />
        <Route path="/ModuleList" element={<ModuleList />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
