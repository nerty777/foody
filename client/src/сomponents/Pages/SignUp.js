import React from 'react';
import SignUpFormContainer from '../SignUpForm/SignUpFormContainer';
import WithAuth from '../Hoc/withAuth';

const SignUp = () => (
  <section>
    <SignUpFormContainer />
  </section>
);

export default WithAuth(SignUp);
