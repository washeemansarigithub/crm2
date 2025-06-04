import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const currentUser = 'Rajesh Kumar';
  const currentRole = 'Admin';

  const menuItems = [
    { icon: 'chart-pie', label: 'Dashboard', path: '/dashboard' },
    { icon: 'lightbulb', label: 'Leads & Sales', path: '/leads' },
    { icon: 'store', label: 'Franchise Management', path: '/franchise' },
    { icon: 'users', label: 'Customers', path: '/customers' },
    { icon: 'user-tie', label: 'HR & Staff', path: '/hr' },
    { icon: 'boxes', label: 'Inventory', path: '/inventory' },
    { icon: 'rupee-sign', label: 'Accounts', path: '/accounts' },
    { icon: 'tasks', label: 'Tasks & Workflow', path: '/tasks' },
    { icon: 'headset', label: 'Support Tickets', path: '/tickets' },
    { icon: 'file-alt', label: 'Documents', path: '/documents' },
    { icon: 'bullhorn', label: 'Marketing', path: '/marketing' },
    { icon: 'chart-bar', label: 'Reports', path: '/reports' },
    { icon: 'cog', label: 'Admin', path: '/admin' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={() => toggleSidebar(false)}
        />
      )}

      {/* Sidebar - updated to eliminate any gap */}
      <aside
        className={`h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out border-r-0
        ${isMobile 
          ? `fixed top-0 left-0 h-full z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64` 
          : `${isOpen ? 'w-64' : 'w-16'}`
        }`}
      >
        {/* Logo and User Info */}
        <div className="sticky top-0 bg-gray-800 z-10 border-b border-gray-700">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2 overflow-hidden">
              <img src="/assets/images/logo.png" alt="Bharat CRM" className="h-6 w-6 flex-shrink-0" />
              {(isOpen || isMobile) && <span className="text-lg font-semibold truncate">Bharat CRM</span>}
            </div>
            {/* Close button for mobile */}
            {isMobile && (
              <button
                onClick={() => toggleSidebar(false)}
                className="text-gray-400 hover:text-white"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            )}
            {/* Toggle button for desktop */}
            {!isMobile && (
              <button
                onClick={() => toggleSidebar(!isOpen)}
                className="text-gray-400 hover:text-white"
              >
                <i className={`fas fa-${isOpen ? 'chevron-left' : 'chevron-right'} text-sm`}></i>
              </button>
            )}
          </div>

          <div className="flex items-center p-4 border-t border-gray-700">
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-user text-white"></i>
            </div>
            {(isOpen || isMobile) && (
              <div className="ml-3 overflow-hidden">
                <div className="text-base font-medium truncate">{currentUser}</div>
                <div className="text-sm text-blue-300 truncate">{currentRole}</div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="h-[calc(100vh-8rem)] overflow-y-auto">
          <nav className="py-2">
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center py-2.5 px-4 text-sm transition
                      ${isActive ? 'bg-gray-700 border-l-4 border-blue-500' : 'hover:bg-gray-700 border-l-4 border-transparent'}
                    `}
                    onClick={() => isMobile && toggleSidebar(false)}
                  >
                    <div className={`text-center ${isOpen || isMobile ? 'w-6' : 'w-full'}`}>
                      <i className={`fas fa-${item.icon}`}></i>
                    </div>
                    {(isOpen || isMobile) && <span className="ml-3 truncate">{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;