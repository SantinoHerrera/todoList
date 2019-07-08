import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
    isAuthenticated: false
  });

  const { user, password, isAuthenticated } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (user === 'admin' && password === '1234') {
      localStorage.setItem('auth', 'true');
      setFormData({ ...formData, isAuthenticated: true });
    }
  };

  if (localStorage.getItem('auth')) {
    return <Redirect to='/todoList' />;
  }

  return (
    <form className='card' onSubmit={onSubmit}>
      <h1>TODO LIST</h1>
      <div className='form-group'>
        <input
          type='text'
          placeholder='User'
          name='user'
          value={user}
          onChange={e => onChange(e)}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={e => onChange(e)}
          required
        />
      </div>
      <input type='submit' className='btn btn-login' value='Login' />
    </form>
  );
};

export default Login;
