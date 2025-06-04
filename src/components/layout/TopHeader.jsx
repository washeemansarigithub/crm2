import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TopHeader = ({ toggleSidebar, currentDateTime = "2025-06-04 12:58:26", currentUser = "amit24ve" }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 md:px-6 flex justify-between items-center shadow-sm">
      {/* Left section - Hamburger menu on mobile and search */}
      <div className="flex items-center gap-3">
        {/* Hamburger menu - only visible on mobile */}
        <button 
          className="text-gray-600 hover:text-gray-800 md:hidden"
          onClick={() => toggleSidebar(true)}
          aria-label="Open menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        <div className="relative flex-1">
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
            <div className="pl-3 pr-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent outline-none border-none py-2 px-1 w-full"
            />
          </div>
        </div>
      </div>

      {/* Middle section - DateTime and User */}
      <div className="hidden md:flex items-center text-gray-700 space-x-4">
        <span>{currentDateTime}</span>
        <span>{currentUser}</span>
      </div>

      {/* Right section - Notifications and User Profile */}
      <div className="flex items-center gap-2 md:gap-3">
        <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative" title="Notifications">
          <i className="fas fa-bell"></i>
          <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">5</span>
        </button>
        
        <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative" title="Messages">
          <i className="fas fa-envelope"></i>
          <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
        </button>
        
        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1.5 md:px-3"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              {currentUser.slice(0, 2).toUpperCase()}
            </div>
            <span className="font-medium hidden md:block">{currentUser}</span>
            <i className={`fas fa-chevron-down text-xs text-gray-500 hidden md:block ${showDropdown ? 'rotate-180' : ''}`}></i>
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-1 min-w-[220px] z-50 border border-gray-100">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">{currentUser}</p>
                <p className="text-xs text-gray-500 mt-0.5">Administrator</p>
                <p className="text-xs text-gray-500 mt-1">{currentDateTime}</p>
              </div>
              
              <Link to="/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm">
                <i className="fas fa-user w-5 text-gray-500"></i> 
                <span>Your Profile</span>
              </Link>
              <Link to="/settings" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm">
                <i className="fas fa-cog w-5 text-gray-500"></i> 
                <span>Settings</span>
              </Link>
              
              <div className="border-t border-gray-100 my-1"></div>
              
              <Link to="/logout" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm text-red-600">
                <i className="fas fa-sign-out-alt w-5"></i> 
                <span>Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopHeader;