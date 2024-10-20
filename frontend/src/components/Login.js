import React, { useState } from 'react';
// import axios from 'axios';
import axios from '../utils/axios';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        username,
        password,
      });
      console.log('data-->' + response.data.accessToken);

      if (response.data && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        onLoginSuccess();
      } else {
        setError('Invalid credentials');
      }

    } catch (err) {
      // Check if the error is a server error or network-related
      if (err.response) {
        // Server responded with a status other than 2xx
        if (err.response.status === 401) {
          setError('Invalid credentials'); // Unauthorized, usually means bad login
        } else {
          setError(`Error: ${err.response.data.message || 'Something went wrong'}`);
        }
      } else if (err.request) {
        // No response received, possible network issue
        setError('Network error: Could not connect to the API');
      } else {
        // Any other error
        setError(`Error: ${err.message}`);
      }
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
