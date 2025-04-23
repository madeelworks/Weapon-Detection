import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    // Simulate an API call
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      setErrorMessage('');
      // Navigate to another page (for example, dashboard) after successful login
      navigate('/dashboard'); // Adjust this route as needed
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#4F2A7F] to-black min-h-screen flex justify-center items-center"> {/* Background color updated */}
      <div className="max-w-3xl mx-auto mt-4 bg-gradient-to-r from-[#482566] to-black p-12 rounded-lg shadow-lg"> {/* Increased form size */}
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Login</h2>

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

          <div className="mb-8">
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

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

          <button
            type="submit"
            className="w-full py-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-white">
          Don't have an account?{' '}
          <a
            href="#"
            onClick={() => navigate('/signup')} // This will navigate to the signup page
            className="text-red-500 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
