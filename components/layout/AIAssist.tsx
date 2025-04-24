"use client";
import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export function AIAssist() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log("User enquiry:", message);
    // TODO: hook into AI backend or API
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 border-b">
            <span className="font-semibold text-gray-900 dark:text-gray-100">AI Assist</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <div className="p-2">
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Ask your question..."
            />
            <button
              onClick={sendMessage}
              className="mt-2 w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
} 