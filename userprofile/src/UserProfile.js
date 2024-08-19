// src/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
  return (
    <div className="user-profile">
      <img src="/lalitp.jpg" alt={`${props.name}'s avatar`} className="user-avatar" />
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <ul>
        <li><strong>Email:</strong> {props.email}</li>
        <li><strong>Location:</strong> {props.location}</li>
        <li><strong>Occupation:</strong> {props.occupation}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
