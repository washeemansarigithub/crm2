import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const currentUser = 'Rajesh Kumar';
  const currentRole = 'Admin';
  const location = useLocation();

  // Track expanded items
  const [expandedItems, setExpandedItems] = useState({
    '/leads': true,
  });

  // Auto-collapse submenus when navigating to a different section
  useEffect(() => {
    // Extract the top-level path from current location
    const currentTopPath = '/' + location.pathname.split('/')[1];
    
    // Create a new object with all submenus collapsed except the current one
    const newExpandedState = {};
    
    // Only keep the submenu open if we're currently on that path
    Object.keys(expandedItems).forEach(path => {
      if (currentTopPath === path) {
        newExpandedState[path] = true;
      }
    });
    
    setExpandedItems(newExpandedState);
  }, [location.pathname]);

  const toggleSubmenu = (path, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close all other submenus and toggle the clicked one
    const newExpandedState = {};
    if (!expandedItems[path]) {
      newExpandedState[path] = true;
    }
    
    setExpandedItems(newExpandedState);
  };

  const menuItems = [
    { icon: 'chart-pie', label: 'Dashboard', path: '/dashboard' },
    {
      icon: 'funnel-dollar',
      label: 'Leads & Sales',
      path: '/leads',
      submenu: [
        { label: 'Lead Management', path: '/leads/LeadManagement' },
        { label: 'Quotations', path: '/leads/quotations' },
        { label: 'Payment Tracking', path: '/leads/payments' },
      ]
    },
   
    { icon: 'users', label: 'Customers', path: '/customers' },
     { icon: 'store', label: 'Franchise Management', path: '/franchise' },
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

  const isPathActive = (path) => {
    if (location.pathname === path) return true;
    // Check if this is an active parent of current path
    if (location.pathname.startsWith(path + '/')) return true;
    
    const item = menuItems.find(m => m.path === path);
    if (item?.submenu) {
      return item.submenu.some(sub => location.pathname === sub.path);
    }
    return false;
  };

  // Handle click on a menu item without submenu
  const handleMenuItemClick = (path) => {
    // If clicking on a regular menu item (without submenu), close all submenus
    if (!menuItems.find(item => item.path === path)?.submenu) {
      setExpandedItems({});
    }
    
    if (isMobile) {
      toggleSidebar(false);
    }
  };

  return (
    <>
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-20" onClick={() => toggleSidebar(false)} />
      )}

      <aside
        className={`h-screen bg-slate-900 text-white transition-all duration-300 ease-in-out 
        ${isMobile ? `fixed top-0 left-0 h-full z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64` 
                   : `${isOpen ? 'w-56' : 'w-18'}`}
        overflow-y-auto overflow-x-hidden`}
      >
        {/* Logo */}
        <div className="bg-slate-900 border-b border-slate-800 flex items-center justify-between p-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <img src="/bharat.png" alt="Bharat CRM" className="h-6 w-6 rounded-full object-cover" />
            {(isOpen || isMobile) && <span className="text-lg font-semibold truncate">Bharat CRM</span>}
          </div>
          {isMobile ? (
            <button onClick={() => toggleSidebar(false)} className="text-gray-400 hover:text-white">
              <i className="fas fa-times text-lg"></i>
            </button>
          ) : (
            <button onClick={() => toggleSidebar(!isOpen)} className="text-gray-400 hover:text-white">
              <i className={`fas fa-${isOpen ? 'chevron-left' : 'chevron-right'} text-sm`}></i>
            </button>
          )}
        </div>

        {/* User Info */}
        <div className="flex items-center p-4 border-b border-slate-800">
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
            <i className="fas fa-user text-white"></i>
          </div>
          {(isOpen || isMobile) && (
            <div className="ml-3 overflow-hidden">
              <div className="text-base font-medium truncate">{currentUser}</div>
              <div className="text-sm text-blue-300 truncate">{currentRole}</div>
            </div>
          )}
        </div>

        {/* Menu */}
        <nav className="py-2">
          <ul>
            {menuItems.map(item => (
              <li key={item.path} className="relative">
                {item.submenu ? (
                  <>
                    <div
                      className={`flex items-center justify-between py-2.5 px-4 text-sm transition cursor-pointer
                        ${isPathActive(item.path) 
                          ? 'bg-slate-800 border-l-4 border-blue-500' 
                          : 'hover:bg-slate-800 border-l-4 border-transparent'}
                      `}
                      onClick={(e) => toggleSubmenu(item.path, e)}
                    >
                      <div className="flex items-center">
                        <div className={`text-center ${isOpen || isMobile ? 'w-6' : 'w-full'}`}>
                          <i className={`fas fa-${item.icon}`}></i>
                        </div>
                        {(isOpen || isMobile) && <span className="ml-2 truncate">{item.label}</span>}
                      </div>
                      {(isOpen || isMobile) && (
                        <i className={`fas fa-chevron-${expandedItems[item.path] ? 'down' : 'right'} text-xs`}></i>
                      )}
                    </div>
                    {expandedItems[item.path] && (isOpen || isMobile) && (
                      <ul className="pl-0 bg-slate-950 border-l-4 border-blue-500">
                        {item.submenu.map(subItem => (
                          <li key={subItem.path}>
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) => `
                                flex items-center pl-12 py-2.5 pr-4 text-sm transition
                                ${isActive ? 'bg-slate-900 text-blue-300' : 'text-gray-300 hover:bg-slate-800 hover:text-white'}
                              `}
                              onClick={() => isMobile && toggleSidebar(false)}
                            >
                              <span className="truncate">{subItem.label}</span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center py-2.5 px-4 text-sm transition
                      ${isActive ? 'bg-slate-800 border-l-4 border-blue-500' : 'hover:bg-slate-800 border-l-4 border-transparent'}
                    `}
                    onClick={() => handleMenuItemClick(item.path)}
                  >
                    <div className={`text-center ${isOpen || isMobile ? 'w-6' : 'w-full'}`}>
                      <i className={`fas fa-${item.icon}`}></i>
                    </div>
                    {(isOpen || isMobile) && <span className="ml-3 truncate">{item.label}</span>}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;