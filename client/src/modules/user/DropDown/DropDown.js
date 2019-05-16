import React from 'react';
import { NavLink } from 'react-router-dom';
import userNav from '../../../configs/user-nav';
import s from './DropDown.module.css';

const DropDown = ({ onSignOut }) => (
  <div className={s.dropdown}>
    <ul className={s.list}>
      {userNav.map(item => (
        <li key={item.name} className={s.item}>
          <NavLink
            className={s.link}
            activeClassName={s.link_hover}
            to={item.path}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
    <button onClick={onSignOut} type="button" className={s.button}>
      Logout
    </button>
  </div>
);

export default DropDown;
