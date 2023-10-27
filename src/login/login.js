import React, { useState } from 'react';
import './login.css';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Define valid Login
  const validLogin = [
    { username: 'vatsal', password: '@Vatsal1' }
  ];

  const isPasswordValid = (pass) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pass);
  };

  const handleLogin = () => {
    const matchedLogin = validLogin.find(
      (cred) => cred.username === username && cred.password === password
    );
  
    if (matchedLogin) {
      if (!isPasswordValid(password)) {
        setError('Invalid password format');
      } else {
        console.log('Login successful');
        setError('');
        window.alert('You logged in successfully!!');
      }
    } else {
      console.log('Login failed');
      setError('*Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="input-group">
        <label className="input-label">Username</label>
        <input
          type="text"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Password</label>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default SignInForm;
