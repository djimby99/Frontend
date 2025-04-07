import React, { useState } from 'react';
import ProfilePage from './profile';
import { useAuth } from '../authContext';


const Main = () => {
const {user} =useAuth();
  const [profile, setProfile] = useState({
    name: user.first_name,
    email: user.email,
    description: 'Product designer with 5+ years of experience in UX/UI design.',
    image: '/api/placeholder/100/100'
  });

 
  
  console.log(user);
 
  return (
    <>
    <ProfilePage profile={profile} />
    </>
  );
};

export default Main;