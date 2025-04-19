
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-green-600">
              Green Nest Agro
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600">Services</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
            <Link to="/profile" className="text-gray-700 hover:text-green-600">Profile</Link>
            <Link to="/cart" className="text-gray-700 hover:text-green-600">
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
