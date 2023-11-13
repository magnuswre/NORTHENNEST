import React, { useState, useEffect } from 'react';

const Test = () => {
  const [userProfile, setUserProfile] = useState(null);


  const handleButtonClick = async () => {
    try {
      const token = localStorage.getItem('user-token');
      const response = await fetch('http://localhost:8080/api/user/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const userProfileData = await response.json();
        setUserProfile(userProfileData);
      } else if (response.status === 401) {
        console.warn('Unauthorized. Token may be invalid or expired.');
      } else {
        console.error('Failed to fetch user profile. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  
  

  return (
    <div>
      <div>Test</div>
      <button onClick={handleButtonClick}>Fetch User Profile</button>

      {/* Display user profile data if available */}
      {userProfile && (
        <div>
          <h2>User Profile</h2>
          <p>User ID: {userProfile.userId}</p>
          {/* Display other user profile data as needed */}
        </div>
      )}
    </div>
  );
};

export default Test;
