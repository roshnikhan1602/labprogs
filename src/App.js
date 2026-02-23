import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import User from './components/User';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';

// NEW imports
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

export default function App() {
  return (
    <AuthProvider>
      <>
        <nav>
          <Link to="/login">Login</Link>|
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> |
          <Link to="/courses">Courses</Link> 
         
        </nav>

        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute><Home /></ProtectedRoute>
          } />

          <Route path="/about" element={
            <ProtectedRoute><About /></ProtectedRoute>
          } />

          <Route path="/contact" element={
            <ProtectedRoute><Contact /></ProtectedRoute>
          } />

          <Route path="/courses" element={
            <ProtectedRoute><Courses /></ProtectedRoute>
          } />

          {/* User Route (if you want to protect it too, wrap in ProtectedRoute) */}
          <Route path="/users/:id" element={
            <ProtectedRoute><User /></ProtectedRoute>
          } />
        </Routes>
      </>
    </AuthProvider>
  );
}