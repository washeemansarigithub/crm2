import React, { useEffect } from 'react';
import LeadManagement from '../components/leads/LeadManagement';

const LeadsPage = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = 'Bharat CRM - Lead Management';
  }, []);

  return (
    <div>
      {/* Current Date and User Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-md">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Lead Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage your leads and track sales pipeline</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-text-secondary">
            <i className="fas fa-calendar-alt mr-sm"></i> 
            Current Date & Time: 2025-06-04 09:55:17 UTC
          </p>
          <p className="text-text-secondary">
            <i className="fas fa-user mr-sm"></i> 
            Logged in as: amit24ve
          </p>
        </div>
      </div>

      {/* Render the Lead Management Component */}
      <LeadManagement />
    </div>
  );
};

export default LeadsPage;