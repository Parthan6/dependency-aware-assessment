import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import { login } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  setUser: (user: any) => void;
  // add other properties if needed
};

export default function Login() {
  const { setUser } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  const handleLogin = async (credentials: { user: any; password: any; }) => {
    const user = await login({ username: credentials.user, password: credentials.password });
    if (user) {
      setUser(user);
      navigate('/');
    }
  };

  return <AuthForm isLogin={true} onSubmit={handleLogin} />;
}
