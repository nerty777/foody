import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import { getCartMenuAmount } from '../Cart/cartSelectors';

const mapState = state => ({
  amount: getCartMenuAmount(state),
});

export default connect(mapState)(CartIcon);
