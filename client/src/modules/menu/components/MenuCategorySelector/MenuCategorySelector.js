import React from 'react';
import s from './MenuCategorySelector.module.css';

const CategorySelector = ({ options, value, onChange }) => (
  <form className={s.form}>
    <label htmlFor="styledSelect" className={s.custom_select}>
      <select
        id="styledSelect"
        name="options"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(o => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  </form>
);

export default CategorySelector;
