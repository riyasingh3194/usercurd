// UserList.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserList = () => {
  const { users, deleteUser, updateUser } = useContext(UserContext);

  const handleUpdate = (user) => {
    // Prompt user to update the user details
    const newName = prompt('Enter the new name', user.name);
    if (newName && newName.trim() !== '') {
      const updatedUser = { ...user, name: newName.trim() };
      updateUser(updatedUser);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleUpdate(user)}>Update</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
