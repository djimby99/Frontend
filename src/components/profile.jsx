import React from 'react';
import { Link } from "react-router";

const ProfilePage = ({ profile }) => {
  console.log(profile);
  return (
    <div className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
         
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-gray-900">User Profile</h1>
        
          <div  className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src={profile.image} alt={profile.first_name} className="w-full h-full object-cover" />
                </div>
                <div>
                <h3 className="text-xl font-bold text-gray-900">{profile.first_name}</h3>
                  <p className="text-gray-600">{profile.email}</p>
                  <p className="mt-1 text-gray-800">{profile.description}</p>
                </div>
              </div>
              <Link 
                to={`/edit`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
              >
                Edit
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;