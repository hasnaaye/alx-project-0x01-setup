import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, address, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">@{username}</h2>
      </div>
      <p className="text-gray-600">Name: {name}</p>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
        <div className ="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">{address.street}, {address.suite}, {address.city}, {address.zipcode}/p>
        </div>
        <div className ="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800">Geo</h3>
          <p className="text-gray-600">{address.geo.lat}, {address.geo.lng}/p>
        </div>
        <div className ="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800">Company</h3>
          <p className="text-gray-600">{company.name}, {company.catchPhrase}, {company.bs}/p>
        </div>
  </div>
  );
};

export default UserCard;
