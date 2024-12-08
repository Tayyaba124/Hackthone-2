import React from 'react';

const Signup = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/Image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '[444]', // Adjust as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-lg mt-80 w-[50%] mb-10">
        <input
          type="email"
          placeholder="your@email.com"
          className="p-3 rounded-l-lg outline-none flex-grow max-w-sm border border-gray-300 w-[50%]"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-r-lg">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signup;
