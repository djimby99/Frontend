import React, { useState } from 'react';
import ProfilePage from './profile';
import { useAuth } from '../authContext';
import { useLoaderData } from 'react-router';

export async function Loader(){
  const storedUser = localStorage.getItem('user');
  return JSON.parse(storedUser);
}
const Main = () => {
  const loaderData = useLoaderData()
// const {user} = useAuth();
  const [profile, setProfile] = useState({
    loaderData
  });

 
  

 
  return (
    <>
    <ProfilePage profile={profile} />
    </>
  );
};

export default Main;