
// src/pages/Home.js
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to Profile App</h1>
      <p className="mb-8 text-lg text-gray-700">A secure application to manage your profile</p>
      
      {currentUser ? (
        <div className="space-y-4">
          <p className="text-xl">Hello, {currentUser.name || currentUser.email}!</p>
          <Link to="/profile" className="inline-block bg-indigo-600 text-white rounded px-6 py-2 hover:bg-indigo-700">
            View Your Profile
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-xl">Please login or register to access your profile</p>
          <div className="space-x-4">
            <Link to="/login" className="inline-block bg-indigo-600 text-white rounded px-6 py-2 hover:bg-indigo-700">
              Login
            </Link>
            <Link to="/register" className="inline-block bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700">
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;