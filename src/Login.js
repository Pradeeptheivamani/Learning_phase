import React from 'react';
import './Login.css'
const Login =()=> {
    return (
   <center>    
<div className='login-card'>
    <h1>Login</h1>
<h2>Sing in with email</h2>
<p id="para">make a database with json and doucment with this login</p>
<form id='form-control'>
<div>📩<input type="email"  placeholder="enter your email"/></div>
<div>🔑<input type= " password" placeholder="enter your password"/></div>
<a href="#" className="forget">Forgot Password</a>
<button type="submit">Login</button>
</form>
</div>
</center>
    );
}
export  default Login