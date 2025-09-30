import React, { useState } from 'react';

const ChatSupport = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Chat Support"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">সাপোর্ট চ্যাট</h3>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <p className="text-sm text-gray-700">আমরা কীভাবে আপনাকে সাহায্য করতে পারি?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="মেসেজ লিখুন..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSupport;
