

const ProfileCard = ({ name, email ,description}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto mt-4">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Profile</button>
    </div>
  );
}

export default ProfileCard;