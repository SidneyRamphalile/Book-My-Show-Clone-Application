import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkBackground-700 text-white px-4 py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/plays" className="text-gray-400 hover:text-white">
                  Plays
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul>
              <li>
                <a
                  href="https://facebook.com/bookmyshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/bookmyshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bookmyshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: info@bookmyshow.com</p>
            <p className="text-gray-400">Phone: +91 123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
