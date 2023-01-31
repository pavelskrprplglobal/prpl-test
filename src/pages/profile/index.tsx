import React from 'react';

import { getUserData } from '../../entities/user/model/user';
import './styles.css';

const ProfilePage = () => {
  const userData = getUserData();

  return (
    <section className="profile-page">
      <div className="profile-page__title">
        <h2>Profile</h2>
      </div>

      <div className="profile-page__content">
        {userData && userData.name}
      </div>
    </section>
  );
}

export default ProfilePage;
