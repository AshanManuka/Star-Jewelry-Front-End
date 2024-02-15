import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import LoginForm from './component/LoginForm';
import MakeLoan from './component/MakeLoan';
import UserDetailForm from './component/UserDetailForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/makeLoan" element={<MakeLoan />} />
        <Route path="/userdetail" element={<UserDetailForm />} />
      </Routes>
    </Router>
  );
}

export default App;
