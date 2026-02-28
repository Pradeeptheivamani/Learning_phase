import React from 'react';
import './LoginTask.css';
import'./App.css';

const LoginTask = () => {
  return (
    <div className="login-card">
      <form className="form-control">
        <h2 className="subtitle">Start your journey</h2>
        <h1 className="title">Welcome Back</h1>
        <p className="text">Sign in with Email or Phone No</p>

        <input type="email" placeholder="Enter your Email or phone No" />
        <input type="password" placeholder="Enter your Password" />

        <a href="#" className="forget">Forgot Password?</a>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default LoginTask;