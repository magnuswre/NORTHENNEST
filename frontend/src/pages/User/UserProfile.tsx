import { useEffect, useState } from 'react';
import userService from '../../features/user/userService';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user information using the stored token
    const token = localStorage.getItem('user-token');
    console.log("userprofile", token)

    if (token) {
      try {
        // Decode the token to extract user ID
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decoding the base64-encoded token
        console.log("UserProfile token:", decodedToken);

        // Extract user ID from the decoded token
        const userId = decodedToken._id;

        // Now you can use the user ID as needed
        console.log("User ID:", userId);

        // Fetch user profile using the user ID
        userService.getUserProfile()
          .then(data => {
            console.log(data);
            setUserData(data);
          })
          .catch(error => {
            console.error(error);
          });
      } catch (error) {
        console.error('Error decoding the token:', error.message);
      }
    }
  }, []);

  return (
    <div>
      <div>
        <p>Welcome!</p>
      </div>
    </div>
  );
}

export default UserProfile;
