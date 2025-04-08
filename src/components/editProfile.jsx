import { useActionData, useNavigate } from 'react-router';
import React, { use, useState } from 'react';
import { useAuth } from '../authContext';
import { Form } from "react-router";
import { useFetcher } from "react-router";


const EditProfilePage = () => {
  const fetcher =useFetcher();
  let busy = fetcher.state !== "idle";
  const actionData = useActionData();
  const {setUser,user} = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      ...user
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  

    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/')}
            className={`mr-4 flex items-center   'text-gray-700`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <h1 className={`text-3xl font-bold  'text-gray-900`}>Edit Profile</h1>
        </div>
        
        <div className={`p-4 rounded-lg border shadow-sm   'bg-white border-gray-200`}>
          <fetcher.Form method="post" action="/edit">
            <div className="flex items-start gap-4 mb-6">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  {/* <img src={''} alt={''} /> */}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-1   text-gray-700`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className={`w-full p-2 rounded border   border-gray-60 bg-white border-gray-300`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-1   text-gray-700`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className={`w-full p-2 rounded border   border-gray-60 bg-white border-gray-300`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-1   text-gray-700`}>
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full p-2 rounded border   border-gray-60 bg-white border-gray-300`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-1  text-gray-700`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 rounded border   border-gray-60 bg-white border-gray-300`}
                    required
                  />
                </div>
                {/* <div className="mb-6">
                  <label className={`block text-sm font-medium mb-1 text-gray-700`}>
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full p-2 rounded border   border-gray-60 bg-white border-gray-300`}
                  ></textarea>
                </div> */}
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <button 
                type="button"
                onClick={() => navigate('/')}
                className={`px-4 py-2 rounded-md  bg-gray-200 text-gray-800`}
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {busy ? "Saving..." : " Save Changes"}
              </button>
            </div>
         </fetcher.Form >
        </div>
      </div>
    );
  };

export default EditProfilePage;