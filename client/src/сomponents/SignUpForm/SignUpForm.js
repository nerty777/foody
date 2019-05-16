import React from 'react';
import s from './SignUpForm.module.css';

const SignUpForm = ({ item, handleChange, handleSubmit }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="login">
        Name
        <input
          id="login"
          className={s.input}
          type="text"
          placeholder="Enter name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label} htmlFor="email">
        Email
        <input
          id="email"
          className={s.input}
          type="email"
          placeholder="Enter email"
          name="email"
          value={item.email}
          onChange={handleChange}
        />
      </label>
      <label className={s.label} htmlFor="password">
        Password
        <input
          id="password"
          className={s.input}
          type="password"
          placeholder="Enter password"
          name="password"
          value={item.password}
          onChange={handleChange}
        />
      </label>
      <button className={s.button} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
