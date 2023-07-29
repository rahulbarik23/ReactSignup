// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from './actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .post('https://dummyjson.com/auth/login', {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(loginSuccess(res.data));
          // Redirect to profile page here
        } else {
          // Handle error from API response
          console.log(res.data.error);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
