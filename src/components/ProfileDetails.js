
import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles[id];

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="profile-details">
      <img src={profile.picture.large} alt={`${profile.name.first}'s profile`} />
      <h2>{`${profile.name.title} ${profile.name.first} ${profile.name.last}`}</h2>
      <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>Location:</strong> {profile.location.city}, {profile.location.state}, {profile.location.country}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Cell:</strong> {profile.cell}</p>
      <p><strong>Nationality:</strong> {profile.nat}</p>
    </div>
  );
};

export default ProfileDetails;
