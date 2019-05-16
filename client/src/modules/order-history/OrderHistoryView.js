import React from 'react';

const OrderHistoryView = ({
  orderHistoryList,
  onShowMoreInfo,
  handleDeleteCard,
}) => (
  <table border="1">
    <tbody>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery address</th>
        <th>Rating</th>
      </tr>
      {orderHistoryList.map(item => {
        const { id, date, price, address, rating } = item;
        return (
          <tr key={id}>
            <td>{date}</td>
            <td>{price}$</td>
            <td>{address}</td>
            <td>{rating}/10</td>
            <td>
              <button type="button" onClick={() => onShowMoreInfo(id)}>
                More info
              </button>
            </td>
            <td>
              <button type="button" onClick={() => handleDeleteCard(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default OrderHistoryView;
