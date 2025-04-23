import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Simulate an API call
    alert('Sign-Up successful!');
    setErrorMessage('');
    // Navigate to login page or another page after successful sign-up
    navigate('/login'); // You can change this to the page you want to navigate after successful sign-up
  };

  return (
    <div className="bg-gradient-to-r from-[#4F2A7F] to-black min-h-screen flex justify-center items-center"> {/* Background color applied to page */}
      <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-[#482566] to-black p-12 rounded-lg shadow-lg"> {/* Increased form width */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-white">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

          <button
            type="submit"
            className="w-full py-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-white">
          Already have an account?{' '}
          <a
            href="#"
            onClick={() => navigate('/login')} // This will navigate to the login page
            className="text-red-600 hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
