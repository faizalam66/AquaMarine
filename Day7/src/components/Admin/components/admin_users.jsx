import React, { useState } from 'react';

function Admin_users() {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', bookings: 3 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', bookings: 1 },
    { id: 1, name: 'John Doe', email: 'john@example.com', bookings: 3 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', bookings: 1 },
    { id: 1, name: 'John ', email: 'john@example.com', bookings: 5},
    // Add more user data as needed
  ]);

  // State to track edited user
  const [editedUser, setEditedUser] = useState(null);

  // Function to handle user deletion
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Function to handle editing user
  const handleEditUser = (user) => {
    setEditedUser(user);
  };

  // Function to save edited user
  const handleSaveEdit = () => {
    // Save editedUser to your backend or update state accordingly
    setEditedUser(null); // Clear editedUser state after saving
  };

  return (
    <div className="w-full pt-4 px-4">
      <span className="text-5xl font-bold text-green-400">Admin Users</span>
      <div className="mt-8">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Bookings</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{editedUser?.id === user.id ? <input type="text" value={editedUser.name} onChange={(e) => setEditedUser({...editedUser, name: e.target.value})} /> : user.name}</td>
                <td className="border px-4 py-2">{editedUser?.id === user.id ? <input type="text" value={editedUser.email} onChange={(e) => setEditedUser({...editedUser, email: e.target.value})} /> : user.email}</td>
                <td className="border px-4 py-2">{user.bookings}</td>
                <td className="border px-4 py-2">
                  {editedUser?.id === user.id ? (
                    <button onClick={handleSaveEdit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                      Save
                    </button>
                  ) : (
                    <button onClick={() => handleEditUser(user)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                      Edit
                    </button>
                  )}
                  {/* Delete user */}
                  <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin_users;
