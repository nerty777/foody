import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import menuOperations from '../../menuOperations';
import menuSelectors from '../../menuSelectors';
import MenuAddItem from './MenuAddItem';

let item = {};

class MenuAddItemContainer extends Component {
  componentDidMount() {
    const { fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'ingredients') {
      value.split(' ');
      item[name] = [value];
    } else {
      item[name] = value;
    }
  };

  handleSubmit = evt => {
    const { fetchItem, history } = this.props;
    evt.preventDefault();
    fetchItem(item);
    setTimeout(() => {
      history.push({
        pathname: '/menu',
      });
    }, 100);
    item = {};
  };

  render() {
    const { categories } = this.props;
    return (
      <MenuAddItem
        item={item}
        categories={categories}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  item: menuSelectors.getMenuOneItem(state),
  categories: menuSelectors.getAllCategories(state),
});

const mapDispatchToProps = {
  fetchItem: menuOperations.fetchAddMenuItem,
  fetchAllCategories: menuOperations.fetchAllCategories,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MenuAddItemContainer);
