import React from 'react';

function LoginForm() {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <form>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
