import React, { useEffect, useState } from 'react';
import UserForm from '../components/Userforms';
import UserTable from '../components/UserTable';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import Axios from 'axios';


function Users() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null); // Store the ID of the user being edited
  const [editName, setEditName] = useState(''); // Store the name of the user being edited
  const [open, setOpen] = useState(false); // Control the modal open/close

  useEffect(() => {
    getUsers();
  }, []);

  // Fetch users from the API
  const getUsers = () => {
    Axios.get('http://127.0.0.1:3001/api/users')
    .then(response => {
      setUsers(response.data?.response || []);
    })
    
  }

  // Handle adding a new user
  const handleAddUser = (newUser) => {
    Axios.post('http://127.0.0.1:3001/api/createuser', newUser)
    .then(response => {
      console.log('User added:', response.data.response);
      getUsers(); // Refresh the user list after adding
    })
    .catch(error => {
      console.error('Error adding user:', error);
    });
  };

  const handleEdit = (id) => {
    const userToEdit = users.find(user => user.id === id);
    setEditUserId(id);
    setEditName(userToEdit.name);
    setOpen(true); // Open the modal for editing
  };

  const handleDelete = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers); // Remove user from state
  };

  const handleSave = () => {
    setUsers(users.map(user =>
      user.id === editUserId ? { ...user, name: editName } : user
    ));
    setOpen(false); // Close the modal after saving
    setEditUserId(null);
    setEditName('');
  };

  const handleCancel = () => {
    setOpen(false); // Close the modal without saving
    setEditUserId(null);
    setEditName('');
  };

  return (
    <>
      <UserForm onAddUser={handleAddUser} /> {/* Pass handleAddUser to UserForm */}
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      
      {/* Edit User Modal */}
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            value={editName}
            onChange={(e) => setEditName(e.target.value)} // Update editName state
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Users;
