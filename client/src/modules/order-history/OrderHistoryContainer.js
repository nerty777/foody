import React, { Component } from 'react';
import * as API from '../../services/api';
import OrderHistoryEditor from './OrderHistoryEditor';
import ModalOrderHistory from '../../сomponents/Modal/ModalOrderHistory';
import OrderHistoryView from './OrderHistoryView';
import s from './OrderHistory.module.css';

let showMoreInfoCard = {};

export default class OrderHistoryContainer extends Component {
  state = {
    orderHistoryList: [],
    isModalOpen: false,
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const orderHistoryList = await API.getAllOrderHistory();
      this.setState({
        orderHistoryList,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  handleDeleteCard = async id => {
    this.setState({ isLoading: true });
    try {
      const isOk = await API.deleteOrderHistoryItem(id);
      if (!isOk) return;
      this.setState(state => ({
        orderHistoryList: state.orderHistoryList.filter(item => item.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  onShowMoreInfo = async id => {
    this.setState({ isLoading: true });
    try {
      const isOk = await API.getOrderHistoryItemById(id);
      if (!isOk) return;
      showMoreInfoCard = isOk;
      setTimeout(() => {
        this.openModal();
      }, 500);
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  handleAddNewOrderHistoryCard = async (address, rating, price) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dateNumber = date.getDate();
    const newItemOrderHistory = {
      date: `${month}/${dateNumber}/${year}`,
      price: `${price}.00`,
      address: `${address}`,
      rating: `${rating}`,
    };
    this.setState({ isLoading: true });
    try {
      const newItem = await API.addOrderHistoryItem(newItemOrderHistory);
      this.setState(state => ({
        orderHistoryList: [...state.orderHistoryList, newItem],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
      isLoading: false,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { orderHistoryList, isModalOpen, isLoading, error } = this.state;
    return (
      <section className={s.container}>
        {error && <p className={s.red}>{error.message}</p>}
        {isLoading && <p className={s.loading}>Loading...</p>}
        <OrderHistoryView
          orderHistoryList={orderHistoryList}
          onShowMoreInfo={this.onShowMoreInfo}
          handleDeleteCard={this.handleDeleteCard}
        />
        <br />
        <OrderHistoryEditor onSubmit={this.handleAddNewOrderHistoryCard} />
        {isModalOpen && (
          <ModalOrderHistory
            onClose={this.closeModal}
            text={showMoreInfoCard}
          />
        )}
      </section>
    );
  }
}
