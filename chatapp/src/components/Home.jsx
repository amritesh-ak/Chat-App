import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

function HomePage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="w-full h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200">
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>

      {/* Message Container */}
      <div className="flex-1">
        <MessageContainer selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default HomePage;

