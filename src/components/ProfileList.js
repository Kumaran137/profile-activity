
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-item">
          <img src={profile.picture.medium} alt={`${profile.name.first}'s profile`} />
          <h3>{`${profile.name.first} ${profile.name.last}`}</h3>
          <Link to={`/profile/${index}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
