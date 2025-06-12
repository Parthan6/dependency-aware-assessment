import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import { login } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const user = await login(credentials);
    if (user) {
      setUser(user);
      navigate('/');
    }
  };

  return <AuthForm isLogin={true} onSubmit={handleLogin} />;
}
