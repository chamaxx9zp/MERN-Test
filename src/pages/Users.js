import React, { useState } from 'react';
import UserForm from '../components/Userforms';
import UserTable from '../components/UserTable';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const usersData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Brown' },
];

function Users() {
  const [users, setUsers] = useState(usersData);
  const [editUserId, setEditUserId] = useState(null); // Store the ID of the user being edited
  const [editName, setEditName] = useState(''); // Store the name of the user being edited
  const [open, setOpen] = useState(false); // Control the modal open/close

  // Handle adding a new user
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);  // Adds the new user to the list
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
