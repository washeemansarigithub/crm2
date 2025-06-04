import React, { useEffect } from 'react';
import LeadFilters from './LeadFilters';
import LeadTable from './LeadTable';
import Pagination from './Pagination';

const LeadManagement = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = 'Bharat CRM - Lead Management';
  }, []);

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-md">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Lead Management</h1>
          <p className="text-sm text-text-secondary mt-1">Track and manage potential customer leads</p>
        </div>
        <div className="mt-2 md:mt-0">
          <button className="bg-secondary text-white border-none py-sm px-md rounded-md cursor-pointer flex items-center gap-sm hover:bg-blue-700">
            <i className="fas fa-plus"></i> New Lead
          </button>
        </div>
      </div>

      <div className="mb-4 text-right">
        <p className="text-text-secondary">
          <i className="fas fa-calendar-alt mr-sm"></i> 
          Current Date & Time: 2025-06-04 10:45:23 UTC
        </p>
        <p className="text-text-secondary">
          <i className="fas fa-user mr-sm"></i> 
          Logged in as: amit24ve
        </p>
      </div>

      {/* Lead Filters */}
      <LeadFilters />
      
      {/* Lead Table */}
      <LeadTable />
      
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default LeadManagement;