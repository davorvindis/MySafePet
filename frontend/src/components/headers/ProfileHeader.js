import React from 'react';

const ProfileHeader = ({ name, breed, subBreed, profilePic }) => (
  <div className="profile-header">
    <div className="profile-image-container">
      <img className="profile-image" src={profilePic} alt={name} />
    </div>
    <h1 className="profile-name">{name}</h1>
    <p className="profile-info">
      {breed} <strong>{subBreed}</strong>
    </p>
  </div>
);

export default ProfileHeader;
