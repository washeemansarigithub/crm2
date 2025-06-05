import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Check if on mobile and set initial sidebar state
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // On initial load or resize, set appropriate sidebar state
      if (mobile) {
        setSidebarOpen(false); // Close sidebar on mobile by default
      } else {
        // On desktop, use stored preference or default to open
        const storedState = localStorage.getItem('sidebarOpen');
        if (storedState !== null) {
          setSidebarOpen(storedState === 'true');
        } else {
          setSidebarOpen(true);
        }
      }
    };
    
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Save sidebar state for desktop
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem('sidebarOpen', sidebarOpen);
    }
  }, [sidebarOpen, isMobile]);
  
  const toggleSidebar = (value) => {
    setSidebarOpen(typeof value === 'boolean' ? value : !sidebarOpen);
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
      
      {/* Main content area - removed gap with no margin and proper flex */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden bg-gray-100">
        <TopHeader 
          toggleSidebar={toggleSidebar} 
          currentDateTime="2025-06-04 12:58:26" 
          currentUser="alex" 
        />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;