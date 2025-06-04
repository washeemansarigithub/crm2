import { useState } from 'react';

const LeadFilters = () => {
  // State for filter values
  const [statusFilter, setStatusFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  
  // Function to handle filter application
  const applyFilters = () => {
    // In a real app, this would trigger an API call or filter state in a parent component
    console.log('Applying filters:', {
      status: statusFilter,
      source: sourceFilter,
      dateRange: { from: dateFrom, to: dateTo }
    });
  };
  
  // Function to reset filters
  const resetFilters = () => {
    setStatusFilter('');
    setSourceFilter('');
    setDateFrom('');
    setDateTo('');
    // In a real app, this would also reset the displayed data
    console.log('Filters reset');
  };
  
  return (
    <div className="flex flex-wrap gap-md bg-bg-card p-md rounded-md mb-md">
      <div className="flex items-center gap-sm">
        <label htmlFor="status-filter" className="text-sm text-text-secondary">Status:</label>
        <select 
          id="status-filter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-light p-2 rounded-md text-sm"
        >
          <option value="">All Statuses</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="proposal">Proposal</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
      </div>
      
      <div className="flex items-center gap-sm">
        <label htmlFor="source-filter" className="text-sm text-text-secondary">Source:</label>
        <select 
          id="source-filter"
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
          className="border border-light p-2 rounded-md text-sm"
        >
          <option value="">All Sources</option>
          <option value="website">Website</option>
          <option value="referral">Referral</option>
          <option value="social">Social Media</option>
          <option value="direct">Direct</option>
          <option value="partner">Partner</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="flex items-center gap-sm">
        <label htmlFor="date-from" className="text-sm text-text-secondary">Date Range:</label>
        <input 
          type="date" 
          id="date-from" 
          name="date-from"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="border border-light p-2 rounded-md text-sm"
        />
        <span className="text-sm text-text-secondary">to</span>
        <input 
          type="date" 
          id="date-to" 
          name="date-to"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="border border-light p-2 rounded-md text-sm"
        />
      </div>
      
      <div className="ml-auto mt-0 lg:mt-sm flex gap-sm">
        <button 
          onClick={applyFilters}
          className="flex items-center gap-1 bg-light text-text-primary border-none py-2 px-3 rounded-md text-sm cursor-pointer hover:bg-muted hover:text-white transition-colors"
        >
          <i className="fas fa-filter"></i> Apply
        </button>
        <button 
          onClick={resetFilters}
          className="flex items-center gap-1 bg-light text-text-primary border-none py-2 px-3 rounded-md text-sm cursor-pointer hover:bg-muted hover:text-white transition-colors"
        >
          <i className="fas fa-redo"></i> Reset
        </button>
      </div>
    </div>
  );
};

export default LeadFilters;