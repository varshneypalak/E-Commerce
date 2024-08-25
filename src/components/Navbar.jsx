import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth } from "../redux/AuthContext"; // Adjust import path accordingly

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img src="../logo.png" className="h-14" alt="logo" />
        </div>
      </NavLink>

      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>

        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-2xl" />
            <button onClick={logout} className="text-red-600">Logout</button>
          </div>
        ) : (
          <NavLink to="/login">
            <p>Login</p>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
