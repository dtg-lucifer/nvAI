import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    try {
      const response = await axios.post('GEMINI_API_URL', {
        message: inputValue,
      });

      setMessages([...messages, { text: response.data, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <div className="fixed bottom-5 right-5 font-['Poppins']">
      {!showChat && (
        <button
          className="bg-white/30 duration-300 hover:duration-300 backdrop-blur-3xl hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex-col"
          onClick={toggleChat}
        >
          <i class="ri-chat-3-fill"></i> AI Chat
        </button>
      )}
      {showChat && (
        <div className="shadow-lg bg-white rounded-lg p-4">
          <button className="absolute top-2 right-2" onClick={closeChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="chatbot-messages h-[400px] overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message p-2 rounded-lg ${
                  message.sender === 'bot' ? 'bg-blue-100 text-blue-900 ml-auto' : 'bg-gray-100 text-gray-900 mr-auto'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-grow border rounded-l-lg p-2 focus:outline-none text-md"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
