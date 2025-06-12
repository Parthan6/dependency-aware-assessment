import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider, useAuth } from './context/AuthContext';

// Placeholder HomePage (replace later)
const HomePage = () => <h1 style={{ textAlign: 'center' }}>Welcome to TopicMaster 👋</h1>;

// Protected Route wrapper
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// Layout wrapper (optional Navbar etc.)
const Layout = ({ children }) => (
  <div>
    {/* Add Navbar here if needed */}
    <main>{children}</main>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
