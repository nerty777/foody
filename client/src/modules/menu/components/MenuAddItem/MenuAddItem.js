import React from 'react';
import s from './MenuAddItem.module.css';

const MenuAddItem = ({
  handleChange,
  handleSubmit,
  categories = [],
  item = {},
}) => (
  <form className={s.form} onSubmit={handleSubmit}>
    <div className={s.wrapper}>
      <label htmlFor="name" className={s.label}>
        Name
        <input
          className={s.input}
          id="name"
          type="text"
          placeholder="Enter name*"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="url" className={s.label}>
        Photo url
        <input
          className={s.input}
          id="url"
          type="text"
          placeholder="Enter photo url"
          name="image"
          value={item.image}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price" className={s.label}>
        Price
        <input
          className={s.input}
          id="price"
          type="number"
          placeholder="Enter price"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
      </label>
    </div>
    <div className={s.wrapper}>
      <label htmlFor="category" className={s.label}>
        Category
        <select
          id="category"
          className={s.select}
          name="category"
          value={item.category}
          onChange={handleChange}
        >
          <option value="">Select category...</option>
          {categories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="description" className={s.label}>
        Description
        <textarea
          rows="10"
          cols="45"
          id="description"
          className={s.description}
          type="text"
          placeholder="Enter description"
          name="description"
          value={item.description}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="ingredients" className={s.label}>
        Ingredients
        <input
          className={s.input}
          id="ingredients"
          type="text"
          placeholder="Enter Ingredients through the gap*"
          name="ingredients"
          value={item.ingredients}
          onChange={handleChange}
        />
      </label>
    </div>
    <button className={s.button} type="submit">
      Add menu card
    </button>
  </form>
);

export default MenuAddItem;
