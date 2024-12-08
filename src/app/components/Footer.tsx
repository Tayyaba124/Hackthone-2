import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaSkype, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Avion</h2>
          <p>21 New York Street</p>
          <p>New York City</p>
          <p>United States of America</p>
          <p>432 34</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          <div className="flex space-x-4">
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaSkype className="hover:text-gray-400 cursor-pointer" />
            <FaPinterestP className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">New arrivals</li>
            <li className="hover:text-gray-400 cursor-pointer">Best sellers</li>
            <li className="hover:text-gray-400 cursor-pointer">Recently viewed</li>
            <li className="hover:text-gray-400 cursor-pointer">Popular this week</li>
            <li className="hover:text-gray-400 cursor-pointer">All products</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Crockery</li>
            <li className="hover:text-gray-400 cursor-pointer">Furniture</li>
            <li className="hover:text-gray-400 cursor-pointer">Homeware</li>
            <li className="hover:text-gray-400 cursor-pointer">Plant pots</li>
            <li className="hover:text-gray-400 cursor-pointer">Chairs</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm">
        <p>Copyright © 2022 Avion LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
