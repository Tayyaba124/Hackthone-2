import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Header Content: Icons, Title, Divider, and Nav Links */}
      <div className="px-8 py-6 border-b border-gray-300">
        {/* Top Row: Search Icon, Title, and Cart/User Icons */}
        <div className="flex items-center justify-between">
          {/* Search Icon */}
          <IoIosSearch className="text-gray-700 text-2xl" />

          {/* Title with Divider */}
          <div className="relative text-center flex-grow">
            <h1 className="text-xl font-semibold text-gray-800">Avion</h1>
            {/* Divider Line */}
            <div className="absolute left-0 right-0 top-full mt-2 mx-auto h-[2px] w-[full] bg-gray-300 shadow-sm"></div>
          </div>

          {/* Cart and User Icons */}
          <div className="flex space-x-6">
            <IoCartOutline className="text-gray-700 text-2xl" />
            <LuCircleUser className="text-gray-700 text-2xl" />
          </div>
        </div>

        {/* Navigation Bar (Integrated) */}
        <nav className="flex justify-center mt-4 text-gray-700">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <Link href="/plant-pots" className="hover:text-gray-900">
                Plant Pots
              </Link>
            </li>
            <li>
              <Link href="/ceramics" className="hover:text-gray-900">
                Ceramics
              </Link>
            </li>
            <li>
              <Link href="/tables" className="hover:text-gray-900">
                Tables
              </Link>
            </li>
            <li>
              <Link href="/chairs" className="hover:text-gray-900">
                Chairs
              </Link>
            </li>
            <li>
              <Link href="/crockery" className="hover:text-gray-900">
                Crockery
              </Link>
            </li>
            <li>
              <Link href="/tableware" className="hover:text-gray-900">
                Tableware
              </Link>
            </li>
            <li>
              <Link href="/cutlery" className="hover:text-gray-900">
                Cutlery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
