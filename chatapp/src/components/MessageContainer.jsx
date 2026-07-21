import React, { useState, useEffect } from 'react';

function MessageContainer({ selectedUser }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchConversation = async () => {
      if (!selectedUser) {
        setMessages([]);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8005/message/${selectedUser._id}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) throw new Error('Failed to fetch conversation');

        const data = await response.json();
        setMessages(data || []);
      } catch (error) {
        console.error('Error fetching conversation:', error);
        setMessages([]);
      }
    };

    fetchConversation();
  }, [selectedUser]);

  const handleInputChange = (e) => setMessage(e.target.value);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please select an image file.');
    }
  };

  const handleSend = async () => {
    if (!message.trim() && !selectedFile) return;

    try {
      const formData = new FormData();
      if (message.trim()) formData.append('message', message);
      if (selectedFile) formData.append('file', selectedFile);

      const response = await fetch(`http://localhost:8005/message/send/${selectedUser._id}`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to send message');

      const newMessage = await response.json();
      setMessages((prev) => [...prev, newMessage]);
      setMessage('');
      setSelectedFile(null);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col justify-between p-4 w-full h-screen bg-white overflow-hidden">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {selectedUser ? `Chat with ${selectedUser.fullName || selectedUser.username}` : 'Select a user to chat'}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4">
        {!selectedUser ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Begin chatting
          </div>
        ) : messages.length === 0 ? (
          <div className="text-gray-400">No messages yet.</div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${msg.senderId === selectedUser._id ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`p-2 rounded-md max-w-[75%] ${
                  msg.senderId === selectedUser._id
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-teal-600 text-white'
                }`}
              >
                {msg.message && <div>{msg.message}</div>}
                {msg.file && (
                  <div className="mt-2">
                    {msg.file.mimetype.startsWith('image/') ? (
                      <img
                        src={`http://localhost:8005/${msg.file.path}`}
                        alt="Sent"
                        className="max-w-xs rounded-lg"
                      />
                    ) : (
                      <a
                        href={`http://localhost:8005/${msg.file.path}`}
                        download
                        className={`underline ${msg.senderId !== selectedUser._id ? 'text-white' : 'text-teal-600'}`}
                      >
                        📎 Download File
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      {selectedUser && (
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Type a message or send an image..."
              value={message}
              onChange={handleInputChange}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-48 text-sm text-gray-600"
            />
            <button
              onClick={handleSend}
              disabled={!message.trim() && !selectedFile}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50"
            >
              Send
            </button>
          </div>
          {selectedFile && (
            <div className="text-sm text-gray-500">Selected image: {selectedFile.name}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default MessageContainer;
