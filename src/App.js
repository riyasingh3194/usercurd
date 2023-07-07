// App.js
import React from 'react';
import { UserProvider } from './UserContext';
import UserList from './UserList';
import AddUserForm from './AddUserForm';

const App = () => {
  return (
    <UserProvider>
      <UserList />
      <AddUserForm />
    </UserProvider>
  );
};

export default App;
