import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar({ selectedUser, setSelectedUser }) {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (!loggedInUser) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8005/user/getusers', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        const filteredUsers = data.filter(user => user._id !== loggedInUser._id);
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [loggedInUser]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="w-[300px] h-screen overflow-y-auto bg-gray-100 p-4 flex flex-col">
      
      {/* Logged-in user */}
      {loggedInUser && (
        <div className="flex items-center mb-6">
          <img
            src={loggedInUser.profilePhoto}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <div>
            <h6 className="text-base font-medium">{loggedInUser.username}</h6>
          </div>
        </div>
      )}

      {/* List of other users */}
      <div className="flex-grow space-y-2 max-h-[calc(100vh-150px)] overflow-y-auto">
        {users.length === 0 ? (
          <div className="text-gray-500">No users found</div>
        ) : (
          users.map((user) => (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center p-2 rounded-lg bg-white shadow cursor-pointer transition ${
                selectedUser?._id === user._id ? 'border-2 border-blue-500' : ''
              }`}
            >
              <img
                src={user.profilePhoto}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <div className="text-sm font-medium">{user.username}</div>
                <div className="text-xs text-gray-500">Last seen recently</div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Logout button */}
      <div className="mt-6">
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
