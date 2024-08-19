// src/App.js
import React from 'react';
import UserProfile from './UserProfile';

const App = () => {
  const user = {
    avatar: 'https://via.placeholder.com/150',
    name: 'Lalitkumar S',
    bio: 'A passionate developer with a love for all things tech.',
    email: 'lalitkumars.22it@kongu.edu',
    location: 'New York, USA',
    occupation: 'Software Engineer'
  };

  return (
    <div className="App">
      <UserProfile 
        avatar={user.avatar}
        name={user.name}
        bio={user.bio}
        email={user.email}
        location={user.location}
        occupation={user.occupation}
      />
    </div>
  );
}

export default App;
