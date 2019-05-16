import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../modules/auth/authSelectors';

const withAuth = WrapperComponent => {
  class WithAuth extends Component {
    componentDidUpdate() {
      const { isAuthenticated, location, history } = this.props;
      if (isAuthenticated) {
        const { from } = location.state || {
          from: { pathname: '/' },
        };
        history.replace(from);
      }
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  const mapState = state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  });

  return connect(mapState)(WithAuth);
};

export default withAuth;
