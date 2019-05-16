import React from 'react';
import SignInFormContainer from '../SignInForm/SignInFormContainer';
import WithAuth from '../Hoc/withAuth';

const SignUp = () => (
  <section>
    <SignInFormContainer />
  </section>
);

export default WithAuth(SignUp);
