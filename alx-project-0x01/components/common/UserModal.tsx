import { UserData, UserModalProps } from "@/interfaces";
import react, {useState} from "React";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [post, setUser] = useState<UserData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    address: ""
  });
  const handleChange = (e: React.changeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value}));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder="Enter user name""
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Address</label>
            <textarea
              id="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter user address"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export interface UserModalProps
export default UserModal;
