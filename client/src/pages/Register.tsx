import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (data: { user: string; password: string; }) => {
    const success = await register({ username: data.user, password: data.password });
    if (success) {
      navigate('/login');
    }
  };

  return <AuthForm isLogin={false} onSubmit={handleRegister} />;
}
