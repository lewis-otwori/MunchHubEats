import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);

    // Send the contact information to the server
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Message sent successfully');
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('Response:', error.response);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md px-4 py-8 bg-white rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
          Contact Us
        </h2>
        <p className="font-medium italic mb-4 text-center text-gray-700">
          Feel free to get in touch with us if you have any questions, proposals,
          or just want to say hello to our restaurant!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
              Your Message
            </label>
            <textarea
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded hover:bg-indigo-700 transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          If you have an account, <a className="text-indigo-700" href="/login">SIGN IN</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
