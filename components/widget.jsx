import React, { useState } from "react";

const ChatbotWidget = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    if (inputText.trim() === "") return;

    // Add user message to the chat history
    setMessages([...messages, { text: inputText, isUser: true }]);
    setInputText("");

    // Simulate chatbot response (replace with actual chatbot logic)
    setTimeout(() => {
      const response = "Hello, I am your chatbot!";
      setMessages([...messages, { text: response, isUser: false }]);
    }, 500);
  };

  const toggleWidget = () => {
    setShowWidget(!showWidget);
  };

  const closeWidget = () => {
    setShowWidget(false);
  };

  return (
    <div className="relative chatbot-container">
      <button
        className={`fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded cursor-pointer transition-all ${
          showWidget ? "hidden" : ""
        }`}
        onClick={toggleWidget}
      >
        Chat
      </button>
      {showWidget && (
        <div className="fixed bottom-4 right-4 w-72 h-96 p-4 bg-white border rounded shadow-lg overflow-hidden">
          <button
            className="absolute top-2 right-2 text-gray-600"
            onClick={closeWidget}
          >
            Close
          </button>
          <div className="chat-window h-72 overflow-y-scroll">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isUser ? "user" : "bot"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="user-input mt-2">
            <input
              type="text"
              value={inputText}
              onChange={handleInput}
              placeholder="Type your message..."
              className="border p-1 rounded"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-1 rounded ml-2"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
