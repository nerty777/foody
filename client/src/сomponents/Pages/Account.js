import React from 'react';
import { connect } from 'react-redux';
import userAvatar from '../../modules/user/UserMenu/userAvatar.jpg';

const Account = ({ user }) =>
  user && (
    <section className="account">
      <div className="text">
        <div>
          <img src={userAvatar} alt="user avatar" title="User profile" />
          <p>Name: {user.name}</p>
          <p>Phone: +38-093-111-11-11</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </section>
  );

const mapStateToProps = state => ({
  user: state.session.user,
});

export default connect(mapStateToProps)(Account);
