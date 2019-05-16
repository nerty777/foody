import React, { Component } from 'react';
import s from './OrderHistory.module.css';

const INITIAL_STATE = {
  address: '',
  rating: '',
  price: '',
};

export default class OrderHistoryEditor extends Component {
  state = { address: '', rating: '', price: '' };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { address, rating, price } = this.state;
    const { onSubmit } = this.props;
    onSubmit(address, rating, price);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { address, rating, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="address">
          Address
          <input
            className={s.input}
            id="address"
            type="text"
            placeholder="Enter address"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            className={s.input}
            id="price"
            type="number"
            placeholder="Enter price"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="rating" className={s.label}>
          Rating
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={this.handleChange}
            className={s.select}
          >
            <option className={s.option} value="" disabled>
              ...
            </option>
            <option className={s.option} value="0">
              0
            </option>
            <option className={s.option} value="1">
              1
            </option>
            <option className={s.option} value="2">
              2
            </option>
            <option className={s.option} value="3">
              3
            </option>
            <option className={s.option} value="4">
              4
            </option>
            <option className={s.option} value="5">
              5
            </option>
            <option className={s.option} value="6">
              6
            </option>
            <option className={s.option} value="7">
              7
            </option>
            <option className={s.option} value="8">
              8
            </option>
            <option className={s.option} value="9">
              9
            </option>
            <option className={s.option} value="10">
              10
            </option>
          </select>
        </label>
        <button type="submit">Add comment</button>
      </form>
    );
  }
}
