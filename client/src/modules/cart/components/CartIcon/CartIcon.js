import React from 'react';
import { Link } from 'react-router-dom';
import cartIconSvg from './cart.svg';
import s from './CartIcon.module.css';

const CartIcon = ({ amount = 7 }) => (
  <div className={s.container}>
    <Link to="/cart">
      <img src={cartIconSvg} width="65" alt="" />
      <span className={s.amount}>{amount}</span>
    </Link>
  </div>
);

export default CartIcon;
