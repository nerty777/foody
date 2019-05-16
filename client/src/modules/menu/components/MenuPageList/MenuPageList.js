import React from 'react';
import MenuCard from '../MenuCard/MenuCard';
import s from './MenuPageList.module.css';

const MenuPageList = ({
  filteredMenu,
  match,
  handleDeleteCard,
  handleShowMoreInfo,
  addToCart,
}) =>
  filteredMenu.length > 0 && (
    <ul className={s.list}>
      {filteredMenu.map(item => {
        const {
          id,
          name,
          image,
          price,
          description,
          ingredients,
          category,
        } = item;
        return (
          <li className={s.item} key={id}>
            <MenuCard
              match={match}
              id={id}
              name={name}
              image={image}
              price={price}
              category={category}
              description={description}
              ingredients={ingredients}
              onShowMoreInfo={() => handleShowMoreInfo(id)}
              onDeleteCard={() => handleDeleteCard(id)}
              addToCart={() => addToCart(id)}
            />
          </li>
        );
      })}
    </ul>
  );

export default MenuPageList;
