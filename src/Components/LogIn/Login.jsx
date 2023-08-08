import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Logged in successfully");
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('Response:', error.response);
      });
  };

  const logOut = (e) => {
    e.preventDefault();
    fetch('/logout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        if (response.ok) {
          alert("User has been logged out");
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen  from-indigo-600  ">
      <div className="bg-white rounded-lg p-8 shadow-md w-96 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 block w-full bg-gray-100 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full bg-gray-100 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 px-6 rounded-md w-full hover:from-pink-700 hover:to-rose-700 transition-colors duration-300 transform hover:scale-105" type="submit">
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">Don't have an account? <a className="text-indigo-500 font-semibold" href="/signup">Sign Up</a></p>
      </div>
      <button className="bg-red-500 text-white py-3 px-6 rounded-full ml-4 transform rotate-12 hover:bg-red-600 transition-colors duration-300 hover:rotate-0" type="button" onClick={logOut}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  );
};

export default Login;
