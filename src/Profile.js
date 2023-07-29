// Profile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchProfileSuccess } from './actions';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id) {
      axios
        .get(`https://dummyjson.com/users/${user.id}`)
        .then((res) => {
          if (res.status === 200) {
            dispatch(fetchProfileSuccess(res.data));
          } else {
            // Handle error from API response
            console.log(res.data.error);
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, [user, dispatch]);

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
// Profile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchProfileSuccess } from './actions';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id) {
      axios
        .get(`https://dummyjson.com/users/${user.id}`)
        .then((res) => {
          if (res.status === 200) {
            dispatch(fetchProfileSuccess(res.data));
          } else {
            // Handle error from API response
            console.log(res.data.error);
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, [user, dispatch]);

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
