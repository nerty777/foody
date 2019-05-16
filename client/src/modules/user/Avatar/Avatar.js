import React from 'react';
import s from './Avatar.module.css';

const Avatar = ({ userAvatar }) => (
  <img
    className={s.avatar}
    src={userAvatar}
    alt="user avatar"
    title="User profile"
  />
);

export default Avatar;
