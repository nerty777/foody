import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../modules/auth/authOperations';
import SignInForm from './SignInForm';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInFormContainer extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { onSubmit } = this.props;
    evt.preventDefault();
    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInForm
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  onSubmit: operations.signIn,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignInFormContainer);
