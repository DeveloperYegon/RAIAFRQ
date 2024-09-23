import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='sticky top-0'>
      <nav className="h-20 flex items-center justify-around  border-b-2 bg-white px-4">
        <h1 className="text-xl font-bold">
          <Link to="/">Rai Alliance</Link></h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
