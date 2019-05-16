import React from 'react';
import { Link } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <Link to="/signin" className={s.link}>
    Sign in
  </Link>
);

export default AuthNav;
