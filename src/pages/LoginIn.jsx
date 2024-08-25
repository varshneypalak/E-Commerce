import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../redux/AuthContext"; // Adjust import path accordingly
import { NavLink } from "react-router-dom";
const LoginIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      login();
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white p-2 rounded-lg font-semibold"
          >
            Login
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-green-400 hover:text-green-300">
              Sign Up here
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginIn;
