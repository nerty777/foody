import React from 'react';
import { Link } from 'react-router-dom';
import s from './SignInForm.module.css';

const SignInForm = ({ email, password, handleSubmit, handleChange }) => (
  <form className={s.form} onSubmit={handleSubmit}>
    <label className={s.label} htmlFor="emailFormIn">
      Email
      <input
        id="emailFormIn"
        className={s.input}
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        onChange={handleChange}
      />
    </label>
    <label className={s.label} htmlFor="passwordFormIn">
      Password
      <input
        id="passwordFormIn"
        className={s.input}
        type="password"
        placeholder="Enter password"
        name="password"
        value={password}
        onChange={handleChange}
      />
    </label>
    <button className={s.button} type="submit">
      Sign in
    </button>
    <span className={s.container}>
      {'Need an account? '}
      <Link to="/signup" className={s.link}>
        Sign up
      </Link>
    </span>
  </form>
);

export default SignInForm;
