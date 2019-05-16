import React from 'react';
import s from './Cart.module.css';

const Cart = ({
  menu = [],
  removeFromCart,
  totalPrice,
  onIncrease,
  onDecrease,
}) =>
  menu.length > 0 ? (
    <>
      <table className={s.table}>
        <tbody>
          {menu.map(({ id, name, image, price, amount }) => (
            <tr key={id} className={s.trow}>
              <td>{name}</td>
              <td>
                <img src={image} alt={image} width="70" />
              </td>
              <td className={s.price}>{price}$</td>
              <td>
                <button
                  type="button"
                  className={s.button}
                  onClick={() => onIncrease(id)}
                >
                  +
                </button>
                {amount}
                <button
                  type="button"
                  className={amount === 1 ? s.disabled : s.button}
                  disabled={amount === 1}
                  onClick={() => onDecrease(id)}
                >
                  -
                </button>
              </td>
              <td className={s.total}>{price * amount}$</td>
              <td>
                <button type="button" onClick={() => removeFromCart(id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={s.total_price}>Total price: {totalPrice}$</p>
    </>
  ) : (
    <div className={s.empty}>В корзине нет товаров!</div>
  );

export default Cart;
