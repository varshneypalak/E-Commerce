import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../redux/AuthContext"; // Adjust import path accordingly

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from AuthContext

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = { name, email, password, gender };
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Set the user as logged in
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    
    // Update the AuthContext
    login();
    
    // Redirect to homepage or desired page
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400">Gender</label>
            <select
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white p-2 rounded-lg font-semibold"
          >
            Sign Up
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <NavLink to="/login" className="text-green-400 hover:text-green-300">
              Login here
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
