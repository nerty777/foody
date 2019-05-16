import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = ({ logoImg }) => (
  <NavLink exact className={s.link} to="/">
    <img className={s.logo} src={logoImg} alt="logo url" title="Foody" />
  </NavLink>
);

export default Logo;
