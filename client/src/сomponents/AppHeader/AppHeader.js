import React from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import CartIcon from '../../modules/cart/components/CartIcon/CartIconContainer';
import AuthNav from '../AuthNav/AuthNav';
import * as selectors from '../../modules/auth/authSelectors';
import * as operations from '../../modules/auth/authOperations';
import logoImg from '../Logo/logo.png';
import appNavItems from '../../configs/main-nav';
import s from './AppHeader.module.css';

const AppHeader = ({ isAuthenticated, user, onSignOut }) => (
  <header className={s.header}>
    <div className={s.logo}>
      <Logo logoImg={logoImg} width={80} height={80} />
    </div>
    <Nav appNavItems={appNavItems} />
    <CartIcon />
    {isAuthenticated ? (
      <div className={s.usermenu}>
        <UserMenu onSignOut={onSignOut} user={user} />
      </div>
    ) : (
      <AuthNav />
    )}
  </header>
);

const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  user: selectors.getUser(state),
});

const mapDispatch = {
  onSignOut: operations.signOut,
};

export default connect(
  mapState,
  mapDispatch,
)(AppHeader);
