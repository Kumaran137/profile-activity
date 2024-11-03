import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=5')
      .then((response) => response.json())
      .then((data) => setProfiles(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileList profiles={profiles} />} />
        <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
      </Routes>
    </Router>
  );
}

export default App;
