import { connect } from 'react-redux';
import { removeFromCart, increaseAmount, decreaseAmount } from './cartActions';
import { getCartMenu, totalPrice } from './cartSelectors';

import Cart from './Cart';

const mapStateToProps = state => ({
  menu: getCartMenu(state),
  totalPrice: totalPrice(state),
});

const mapDispatchToProps = {
  removeFromCart,
  onIncrease: increaseAmount,
  onDecrease: decreaseAmount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
