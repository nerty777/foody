import React from 'react';
import s from './MenuFilter.module.css';

const MenuFilter = ({ filter, handleFilterChange }) => (
  <form className={s.container}>
    <input
      className={s.input_filter}
      type="text"
      placeholder="search name"
      value={filter}
      onChange={handleFilterChange}
    />
  </form>
);

export default MenuFilter;
