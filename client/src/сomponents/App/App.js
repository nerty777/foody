import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';
import AppHeader from '../AppHeader/AppHeader';
import { refreshCurrentUser } from '../../modules/auth/authOperations';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import routes from '../../configs/routes';

const AsyncHomePage = lazy(() =>
  import('../Pages/Home' /* webpackChunkName: "home-page" */),
);
const AsyncMenuPage = lazy(() =>
  import('../Pages/MenuPage' /* webpackChunkName: "menu-page" */),
);
const AsyncOrderHistory = lazy(() =>
  import('../Pages/OrderHistory' /* webpackChunkName: "order-history-page" */),
);
const AsyncMenuAddItem = lazy(() =>
  import('../Pages/MenuAddItem' /* webpackChunkName: "menu-add-item-page" */),
);
const AsyncMenuCardPage = lazy(() =>
  import('../Pages/MenuOneCard' /* webpackChunkName: "menu-one-card-page" */),
);
const AsyncAboutPage = lazy(() =>
  import('../Pages/About' /* webpackChunkName: "about-page" */),
);
const AsyncContactsPage = lazy(() =>
  import('../Pages/Contacts' /* webpackChunkName: "contacts-page" */),
);
const AsyncDeliveryPage = lazy(() =>
  import('../Pages/Delivery' /* webpackChunkName: "delivery-page" */),
);
const AsyncAccountPage = lazy(() =>
  import('../Pages/Account' /* webpackChunkName: "account-page" */),
);
const AsyncPlannerPage = lazy(() =>
  import('../Pages/Planner' /* webpackChunkName: "planner-page" */),
);
const AsyncCartPage = lazy(() =>
  import('../Pages/Cart' /* webpackChunkName: "cart-page" */),
);
const AsyncSignInPage = lazy(() =>
  import('../Pages/SignIn' /* webpackChunkName: "sign-in-page" */),
);
const AsyncSignUpPage = lazy(() =>
  import('../Pages/SignUp' /* webpackChunkName: "sign-up-page" */),
);
const AsyncNotFoundPage = lazy(() =>
  import('../Pages/NotFound' /* webpackChunkName: "not-found-page" */),
);

class App extends Component {
  state = {
    orderHistory: [],
  };

  componentDidMount() {
    const { refreshUser } = this.props;
    refreshUser();
  }

  handleAddComment = (address, rating, price) => {
    this.setState(prevState => ({
      orderHistory: [
        { id: v4(), address, price, rating },
        ...prevState.orderHistory,
      ],
    }));
  };

  handleDeleteComment = id => {
    this.setState(prevState => ({
      orderHistory: prevState.orderHistory.filter(comment => comment.id !== id),
    }));
  };

  render() {
    return (
      <>
        <AppHeader
          logo={<p>Logo</p>}
          nav={<p>Nav</p>}
          usermenu={<p>UserMenu</p>}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.HOME} component={AsyncHomePage} />
            <Route exact path={routes.MENU} component={AsyncMenuPage} />
            <Route
              exact
              path={routes.MENU_ADD_ITEM}
              component={AsyncMenuAddItem}
            />
            <Route path="/menu/:id" component={AsyncMenuCardPage} />
            <Route path={routes.ABOUT} component={AsyncAboutPage} />
            <Route path={routes.CONTACTS} component={AsyncContactsPage} />
            <Route path={routes.DELIVERY} component={AsyncDeliveryPage} />
            <ProtectedRoute
              path={routes.ORDER_HISTORY}
              redirectTo="/signin"
              component={AsyncOrderHistory}
            />
            <ProtectedRoute
              path={routes.ACCOUNT}
              redirectTo="/signin"
              component={AsyncAccountPage}
            />
            <ProtectedRoute
              path={routes.PLANNER}
              redirectTo="/signin"
              component={AsyncPlannerPage}
            />
            <Route path={routes.CART} component={AsyncCartPage} />
            <Route path={routes.SIGN_IN} component={AsyncSignInPage} />
            <Route path={routes.SIGN_UP} component={AsyncSignUpPage} />
            <Route component={AsyncNotFoundPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  refreshUser: refreshCurrentUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
