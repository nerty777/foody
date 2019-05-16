import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../modules/auth/authOperations';
import SignUpForm from './SignUpForm';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

class SignUpFormContainer extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <SignUpForm
        item={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  onSubmit: operations.signUp,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUpFormContainer);
