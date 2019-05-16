import React, { Component, createRef } from 'react';
import DropDown from '../DropDown/DropDown';
import Avatar from '../Avatar/Avatar';
import routes from '../../../configs/routes';
import userAvatar from './userAvatar.jpg';
import s from './UserMenu.module.css';

export default class UserMenu extends Component {
  backdropRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleEscClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleEscClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.backdropRef.current.contains(e.target);
    const { isDropDownOpen } = this.state;
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropDown();
    }
    if (
      (e.target.pathname === routes.ACCOUNT ||
        e.target.pathname === routes.PLANNER ||
        e.target.pathname === routes.ORDER_HISTORY) &&
      isTargetInsideContainer &&
      isDropDownOpen
    ) {
      this.closeDropDown();
    }
  };

  handleEscClick = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.closeDropDown();
  };

  openDropDown = () => {
    this.setState({
      isDropDownOpen: true,
    });
  };

  closeDropDown = () => {
    this.setState({
      isDropDownOpen: false,
    });
  };

  render() {
    const { isDropDownOpen } = this.state;
    const { user, onSignOut } = this.props;
    return (
      <div
        className={s.container}
        onClick={this.openDropDown}
        ref={this.backdropRef}
      >
        <Avatar userAvatar={userAvatar} />
        <span className={s.name}>{user.name}</span>
        {isDropDownOpen && <DropDown onSignOut={onSignOut} />}
      </div>
    );
  }
}
