import React from 'react';
import s from './MenuOneCardPage.module.css';

const MenuCardPage = ({ menuOneItem, handleGoBack, addToCart }) => (
  <div className={s.container}>
    <div className="wrapper">
      <button className={s.button} type="button" onClick={handleGoBack}>
        Back to menu
      </button>
      <img
        className={s.img}
        src={menuOneItem.image}
        alt={menuOneItem.name}
        width="350"
        height="auto"
      />
      {/* <div className={s.id}>ID: {menuOneItem.id}</div> */}
      <div className={s.name}>Название: {menuOneItem.name}</div>
      <div className={s.price}>Цена: {menuOneItem.price}$</div>
      <div className={s.category}>Категория: {menuOneItem.category}</div>
      <div className={s.description}>Описание: {menuOneItem.description}</div>
      {menuOneItem.ingredients && (
        <div className={s.ingredients}>
          Состав: {menuOneItem.ingredients.map(ingredient => `${ingredient}. `)}
        </div>
      )}
            <button className={s.addToCart} type="button" onClick={() => addToCart(menuOneItem.id)}>
        Add to cart
      </button>
    </div>
  </div>
);

export default MenuCardPage;
