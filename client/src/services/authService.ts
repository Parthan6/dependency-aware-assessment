import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // adjust as needed
});

export const login = async ({ email, password }) => {
  try {
    const res = await API.post('/login', { email, password });
    return res.data.user;
  } catch (err) {
    alert('Login failed');
    return null;
  }
};

export const register = async ({ email, password }) => {
  try {
    await API.post('/register', { email, password });
    return true;
  } catch (err) {
    alert('Registration failed');
    return false;
  }
};
