"use client";
import { useChat } from "ai/react";

export function Convo() {
  const { input, handleInputChange, handleSubmit, messages } = useChat();

  console.log(messages);

  return (
    <div>
      {/* text messages */}
      {messages.map((message) => {
        return (
          <div key={message.id}>
            {/*  Name of person talking */}
            {message.role === "assistant" ? (
              <h3 className="text-lg font-semibold mt-2">Stucco Assistant</h3>
            ) : (
              <h3 className="text-lg font-semibold mt-2">User</h3>
            )}

            {/* Formatting the message */}
            {message.content.split("\n").map((currentTextBlock, index) => {
              if (currentTextBlock === "") {
                return <p key={message.id + index}>&nbsp;</p>; // " "
              } else {
                return <p key={message.id + index}>{currentTextBlock}</p>;
              }
            })}
          </div>
        );
      })}

      <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:border md:py-4 mt-6">
        <form className="flex" onSubmit={handleSubmit}>
          <textarea
            className="rounded-full mt-2 w-full bg-gray-600 text-white"
            placeholder="What is stucco?"
            value={input}
            onChange={handleInputChange}
          ></textarea>
          <button className="rounded-full bg-blue-400 text-gray-800 p-2 mt-5">
            <svg
              class=" -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
