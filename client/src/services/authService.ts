import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // adjust as needed
});

type AuthParams = {
  username: string;
  password: string;
};

export const login = async ({ username, password }: AuthParams) => {
  try {
    const res = await API.post('/login', { username, password });
    return res.data.user;
  } catch (err) {
    alert('Login failed');
    return null;
  }
};

export const register = async ({ username, password }: AuthParams) => {
  try {
    await API.post('/register', { username, password });
    return true;
  } catch (err) {
    alert('Registration failed');
    return false;
  }
};
