import React, { useState, useEffect } from 'react';

const LeadManagement = () => {
  const [currentDateTime, setCurrentDateTime] = useState('2025-06-05 08:11:39');
  const currentUser = 'amit24ve';
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTable, setShowTable] = useState(false);
  
  // Update page title when component mounts
  useEffect(() => {
    document.title = 'Bharat CRM - Lead Management';
  }, []);

  // Toggle table visibility
  const toggleTable = () => {
    setShowTable(!showTable);
  };

  // Mock data for leads
  const leads = [
    {
      id: 'L-2025-0124',
      name: 'Vikram Sharma',
      phone: '+91 9876543210',
      email: 'vikram.s@example.com',
      source: { icon: 'globe', name: 'Website', color: 'blue' },
      status: 'new',
      createdDate: '2025-06-01',
      followUpDue: '2025-06-05'
    },
    {
      id: 'L-2025-0123',
      name: 'Priya Patel',
      phone: '+91 9876543211',
      email: 'priya.p@example.com',
      source: { icon: 'user-friends', name: 'Referral', color: 'green' },
      status: 'contacted',
      createdDate: '2025-05-29',
      followUpDue: '2025-06-04'
    },
    {
      id: 'L-2025-0122',
      name: 'Rahul Mehta',
      phone: '+91 9876543212',
      email: 'rahul.m@example.com',
      source: { icon: 'phone', name: 'Phone Call', color: 'purple' },
      status: 'qualified',
      createdDate: '2025-05-28',
      followUpDue: '2025-06-06'
    },
    {
      id: 'L-2025-0121',
      name: 'Sanjay Gupta',
      phone: '+91 9876543213',
      email: 'sanjay.g@example.com',
      source: { icon: 'envelope', name: 'Email', color: 'orange' },
      status: 'proposal',
      createdDate: '2025-05-27',
      followUpDue: '2025-06-03'
    },
    {
      id: 'L-2025-0120',
      name: 'Neha Kapoor',
      phone: '+91 9876543214',
      email: 'neha.k@example.com',
      source: { icon: 'shopping-cart', name: 'Online Store', color: 'teal' },
      status: 'converted',
      createdDate: '2025-05-26',
      followUpDue: null
    }
  ];

  // Toggle all checkbox selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedLeads(leads.map(lead => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  // Toggle individual checkbox selection
  const handleSelectLead = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter(leadId => leadId !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

  // Helper function to determine if follow-up date is due
  const isFollowUpDue = (dateString) => {
    if (!dateString) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const followUpDate = new Date(dateString);
    followUpDate.setHours(0, 0, 0, 0);
    
    return followUpDate <= today;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header with Meta Information */}
      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 border-b border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Lead Management</h1>
            <p className="text-sm text-gray-500 mt-1">Track and manage potential customer interactions</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-3">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
              <i className="fas fa-plus"></i> New Lead
            </button>
          </div>
        </div>
        
        <div className="p-5 bg-gray-50 text-sm flex flex-wrap justify-between">
          <div className="text-gray-600">
            <i className="far fa-clock mr-2"></i>{currentDateTime} (UTC)
          </div>
          <div className="text-gray-600">
            <i className="far fa-user mr-2"></i>Logged in as: {currentUser}
          </div>
        </div>
      </div>
      
      {/* Lead Filters */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Lead Filters</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-search text-gray-400"></i>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="proposal">Proposal</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="all">All Sources</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="phone">Phone Call</option>
              <option value="email">Email</option>
              <option value="social">Social Media</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <input 
              type="date" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-between">
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition flex items-center gap-2"
            onClick={toggleTable}
          >
            <i className={`fas fa-${showTable ? 'eye-slash' : 'eye'}`}></i>
            {showTable ? 'Hide All Leads' : 'View All Leads'}
          </button>
          
          <div className="flex gap-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
              Reset Filters
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
        
      {/* Lead Table Section - Only shown when showTable is true */}
      {showTable && (
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-0">Lead Database</h2>
              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center text-gray-600 hover:text-blue-600 py-1.5 px-2.5 rounded hover:bg-gray-100 transition">
                  <i className="fas fa-download mr-1.5"></i>
                  <span>Export</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600 py-1.5 px-2.5 rounded hover:bg-gray-100 transition">
                  <i className="fas fa-print mr-1.5"></i>
                  <span>Print</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600 py-1.5 px-2.5 rounded hover:bg-gray-100 transition">
                  <i className="fas fa-cog mr-1.5"></i>
                  <span>Settings</span>
                </button>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 border-b border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="selectAll"
                className="mr-2 h-4 w-4 text-blue-600 rounded border-gray-300"
                onChange={handleSelectAll}
                checked={selectedLeads.length === leads.length && leads.length > 0}
              />
              <label htmlFor="selectAll" className="text-sm font-medium text-gray-700">Select All</label>
              {selectedLeads.length > 0 && (
                <span className="ml-3 text-sm text-gray-600">
                  {selectedLeads.length} selected
                </span>
              )}
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <select className="border border-gray-300 rounded text-sm px-2 py-1.5 mr-2 bg-white text-gray-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option>Bulk Actions</option>
                <option>Mark as Contacted</option>
                <option>Export Selected</option>
                <option>Delete Selected</option>
              </select>
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition">
                Apply
              </button>
            </div>
          </div>
          
          {/* Improved Table Design */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  <th className="px-3 py-2 w-8 text-center">&nbsp;</th>
                  <th className="px-3 py-2 w-24">ID</th>
                  <th className="px-3 py-2 w-36">Name</th>
                  <th className="px-3 py-2 w-28 hidden sm:table-cell">Phone</th>
                  <th className="px-3 py-2 w-40 hidden md:table-cell">Email</th>
                  <th className="px-3 py-2 w-24 hidden lg:table-cell">Source</th>
                  <th className="px-3 py-2 w-24">Status</th>
                  <th className="px-3 py-2 w-24 hidden lg:table-cell">Created</th>
                  <th className="px-3 py-2 w-24 hidden md:table-cell">Follow-up</th>
                  <th className="px-3 py-2 w-20 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <tr
                    key={lead.id}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } border-b border-gray-100 hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-3 py-2 text-center align-middle">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 rounded border-gray-300"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={() => handleSelectLead(lead.id)}
                      />
                    </td>
                    <td className="px-3 py-2 text-xs font-medium text-gray-900 align-middle">{lead.id}</td>
                    <td className="px-3 py-2 align-middle">
                      <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                      <div className="text-xs text-gray-500 sm:hidden">{lead.phone}</div>
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-500 hidden sm:table-cell align-middle">{lead.phone}</td>
                    <td className="px-3 py-2 text-sm hidden md:table-cell align-middle">
                      <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-3 py-2 hidden lg:table-cell align-middle">
                      <LeadSource source={lead.source} />
                    </td>
                    <td className="px-3 py-2 align-middle">
                      <LeadStatus status={lead.status} />
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-500 hidden lg:table-cell align-middle">{lead.createdDate}</td>
                    <td className="px-3 py-2 text-xs hidden md:table-cell align-middle">
                      {lead.followUpDue ? (
                        <span
                          className={`${
                            isFollowUpDue(lead.followUpDue)
                              ? 'text-red-600 font-medium'
                              : 'text-gray-500'
                          }`}
                        >
                          {lead.followUpDue}
                        </span>
                      ) : (
                        <span className="text-gray-400">--</span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center align-middle">
                      <div className="flex justify-center space-x-2">
                        <button
                          aria-label="View Lead"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          title="View Lead"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button
                          aria-label="Edit Lead"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          title="Edit Lead"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          aria-label="More Options"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          title="More Options"
                        >
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="border-t border-gray-200 px-5 py-3 flex flex-wrap items-center justify-between">
            <div className="text-xs text-gray-600 mb-2 sm:mb-0">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
              <span className="font-medium">5</span> results
            </div>
            
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                className="relative inline-flex items-center px-2 py-1.5 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition"
              >
                <span className="sr-only">Previous</span>
                <i className="fas fa-chevron-left text-xs"></i>
              </button>
              <button
                className="relative inline-flex items-center px-3 py-1.5 border border-gray-300 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                1
              </button>
              <button
                className="relative inline-flex items-center px-2 py-1.5 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition"
              >
                <span className="sr-only">Next</span>
                <i className="fas fa-chevron-right text-xs"></i>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced LeadStatus Component
const LeadStatus = ({ status }) => {
  const statusConfig = {
    new: {
      label: 'New',
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      icon: 'star'
    },
    contacted: {
      label: 'Contacted',
      bg: 'bg-purple-100',
      text: 'text-purple-800',
      icon: 'phone'
    },
    qualified: {
      label: 'Qualified',
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      icon: 'check'
    },
    proposal: {
      label: 'Proposal',
      bg: 'bg-orange-100',
      text: 'text-orange-800',
      icon: 'file-alt'
    },
    converted: {
      label: 'Converted',
      bg: 'bg-green-100',
      text: 'text-green-800',
      icon: 'trophy'
    },
    lost: {
      label: 'Lost',
      bg: 'bg-red-100',
      text: 'text-red-800',
      icon: 'times-circle'
    }
  };

  const config = statusConfig[status] || statusConfig.new;

  return (
    <div className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <i className={`fas fa-${config.icon} mr-1`}></i>
      {config.label}
    </div>
  );
};

// Enhanced LeadSource Component
const LeadSource = ({ source }) => {
  const { icon, name } = source;
  
  const getSourceStyles = (sourceName) => {
    switch (sourceName) {
      case 'Website':
        return { bg: 'bg-blue-100', text: 'text-blue-800' };
      case 'Referral':
        return { bg: 'bg-green-100', text: 'text-green-800' };
      case 'Phone Call':
        return { bg: 'bg-purple-100', text: 'text-purple-800' };
      case 'Email':
        return { bg: 'bg-orange-100', text: 'text-orange-800' };
      case 'Online Store':
        return { bg: 'bg-teal-100', text: 'text-teal-800' };
      case 'Social Media':
        return { bg: 'bg-indigo-100', text: 'text-indigo-800' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800' };
    }
  };

  const styles = getSourceStyles(name);

  return (
    <div className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${styles.bg} ${styles.text}`}>
      <i className={`fas fa-${icon} mr-1`}></i>
      {name}
    </div>
  );
};

export default LeadManagement;