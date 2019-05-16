import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const AppNav = ({ appNavItems }) => (
  <nav className={s.container}>
    <ul className={s.list}>
      {appNavItems.map(item => (
        <li className={s.item} key={item.name}>
          <NavLink
            exact
            className={s.link}
            activeClassName={s.link_hover}
            to={item.path}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
