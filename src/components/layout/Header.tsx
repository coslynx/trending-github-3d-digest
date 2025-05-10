import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-dark-background fixed top-0 w-full z-10">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <a href="/" className="text-light-text h-8" aria-label="Go to homepage">
          GitHub Trending
        </a>
        <nav className="flex items-center">
          <div className="desktop:block mobile:hidden">
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-light-text font-roboto" aria-label="Go to Home section">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light-text font-roboto" aria-label="Go to About section">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light-text font-roboto" aria-label="Go to Contact section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className="mobile:block desktop:hidden text-light-text focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;