import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'

export default function AuthForm({ isLogin, onSubmit }) {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="logo">
          <h1>Welcome</h1>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <h2>{isLogin ? 'Sign In' : 'Create Account'}</h2>

          <input
            type="text"
            name="user"
            placeholder="User name"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}

          {isLogin && (
            <div className="forgot">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          )}

          <button type="submit" className="main-btn">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>

          

          <p className="toggle-link">
            {isLogin ? (
              <>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </>
            ) : (
              <>
                Already have an account? <Link to="/login">Sign In</Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
