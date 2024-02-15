import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import LoginForm from './component/LoginForm';
import MakeLoan from './component/MakeLoan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/makeLoan" element={<MakeLoan />} />
      </Routes>
    </Router>
  );
}

export default App;
