import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/b605c580-5ad5-4c18-b6e2-9e4d3ef50c1e.png" 
                alt="Green Nest Agro Logo" 
                className="h-10 w-10"
              />
              <h3 className="text-xl font-bold">Green Nest Agro Pet Ltd.</h3>
            </div>
            <p className="text-gray-400">
              Leading the way in hydroponic solutions for sustainable farming. We provide cutting-edge technology and expertise for modern agriculture.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@greennest.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Hydro Street, Green City</li>
              <li>Hours: Mon-Fri: 9AM-6PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/greennest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/greennest_agro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/greennest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Stay connected for updates, tips, and special offers!</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Green Nest Agro Pet Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
