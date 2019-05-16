import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import queryString from 'query-string';
import { menuOperations, menuSelectors } from '../..';
import cartActions from '../../../cart/components/Cart/cartActions';
import PageList from './MenuPageList';
import ModalMenuPage from '../../../../сomponents/Modal/ModalMenuPage/index';
import MenuCategorySelector from '../MenuCategorySelector/MenuCategorySelector';
import MenuFilter from '../MenuFilter/MenuFilter';
import routes from '../../../../configs/routes';
import s from './MenuPageListContainer.module.css';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class PageListContainer extends Component {
  componentDidMount() {
    const {
      fetchMenuItems,
      fetchAllCategories,
      fetchMenuByCategory,
    } = this.props;
    fetchMenuItems();
    fetchAllCategories();
    const category = getCategoryFromProps(this.props);

    if (!category) {
      const { history, location } = this.props;
      return history.replace({
        pathname: location.pathname,
        search: 'category=all',
      });
    }
    return fetchMenuByCategory(category);
  }

  handleCategoryChange = category => {
    const { history, location, fetchMenuByCategory } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });
    return fetchMenuByCategory(category);
  };

  handleFilterChange = e => {
    const { handleFilterChange } = this.props;
    handleFilterChange(e.target.value);
  };

  render() {
    const {
      menuOneItemForModal,
      match,
      handleDeleteCard,
      handleShowMoreInfo,
      modalStatus,
      categories,
      filteredMenu,
      addToCart,
    } = this.props;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <section className={s.menupage}>
        <div className={s.container}>
          <NavLink
            className={s.link}
            activeClassName={s.link_hover}
            to={routes.MENU_ADD_ITEM}
          >
            Add new menu card
          </NavLink>
          <MenuFilter handleFilterChange={this.handleFilterChange} />
          <MenuCategorySelector
            options={['all', ...categories.map(item => item.name)]}
            value={currentCategory}
            onChange={this.handleCategoryChange}
          />
        </div>
        {filteredMenu && (
          <PageList
            filteredMenu={filteredMenu}
            match={match}
            handleDeleteCard={handleDeleteCard}
            handleShowMoreInfo={handleShowMoreInfo}
            addToCart={addToCart}
          />
        )}
        {modalStatus && (
          <ModalMenuPage menuOneItemForModal={menuOneItemForModal} />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuOneItemForModal: menuSelectors.getMenuOneItemForModal(state),
    modalStatus: menuSelectors.modalStatus(state),
    categories: menuSelectors.getAllCategories(state),
    filteredMenu: menuSelectors.getFilteredMenuItems(state),
  };
};

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchAllCategories: menuOperations.fetchAllCategories,
  handleDeleteCard: menuOperations.fetchDeleteMenuItem,
  handleShowMoreInfo: menuOperations.getMenuOneItemForModal,
  fetchMenuByCategory: menuOperations.fetchMenuByCategory,
  handleFilterChange: menuOperations.handleFilterChange,
  addToCart: cartActions.addToCart,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(PageListContainer);
