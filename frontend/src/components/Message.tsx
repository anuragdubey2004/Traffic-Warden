import React from 'react';

// Define the shape of the data
interface MessageProps {
    text: string;
    onClose: () => void;   // A function to hide the message
}

const Message: React.FC<MessageProps> = ({ text, onClose }) => {
  return (
    <div className="min-h-screen bg-[#0B1D3A] flex items-center justify-center p-4">
      <div className="bg-white max-w-sm rounded-xl overflow-hidden shadow-2xl p-6 border-l-8 border-red-500">
        <div className="flex items-center mb-4">
          <span className="text-red-500 text-2xl mr-3">⚠️</span>
          <h3 className="text-xl font-bold text-gray-800">Rate Limit</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {text}
        </p>
        <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg font-medium hover:bg-gray-900"
            onClick={onClose}>
          DISMISS
        </button>
      </div>
    </div>
  );
};

export default Message;