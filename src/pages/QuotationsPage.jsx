import React, { useEffect, useState } from 'react';

const QuotationsPage = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = 'Bharat CRM - Quotations';
  }, []);

  // Sample data for quotations
  const [quotations, setQuotations] = useState([
    {
      id: 'Q-2025-0056',
      client: 'Vikram Sharma',
      clientId: 'C-2025-0124',
      amount: 54000,
      status: 'sent',
      createdDate: '2025-06-01',
      expiryDate: '2025-06-15',
      items: 3,
      followUpDate: '2025-06-07'
    },
    {
      id: 'Q-2025-0055',
      client: 'Priya Patel',
      clientId: 'C-2025-0123',
      amount: 32500,
      status: 'draft',
      createdDate: '2025-05-30',
      expiryDate: '2025-06-14',
      items: 2,
      followUpDate: '2025-06-06'
    },
    {
      id: 'Q-2025-0054',
      client: 'Rajesh Kumar',
      clientId: 'C-2025-0122',
      amount: 41200,
      status: 'accepted',
      createdDate: '2025-05-28',
      expiryDate: '2025-06-11',
      items: 4,
      followUpDate: null
    },
    {
      id: 'Q-2025-0053',
      client: 'Anita Desai',
      clientId: 'C-2025-0121',
      amount: 22800,
      status: 'rejected',
      createdDate: '2025-05-25',
      expiryDate: '2025-06-08',
      items: 1,
      followUpDate: null
    },
    {
      id: 'Q-2025-0052',
      client: 'Sanjay Gupta',
      clientId: 'C-2025-0120',
      amount: 68500,
      status: 'accepted',
      createdDate: '2025-05-22',
      expiryDate: '2025-06-05',
      items: 5,
      followUpDate: null
    }
  ]);

  // Calculate summary statistics
  const totalSent = quotations.filter(q => q.status === 'sent').length;
  const totalAccepted = quotations.filter(q => q.status === 'accepted').length;
  const totalValue = quotations.reduce((sum, q) => sum + q.amount, 0);
  const acceptanceRate = Math.round((totalAccepted / (totalAccepted + quotations.filter(q => q.status === 'rejected').length)) * 100);

  // Handle marking quotation as accepted
  const handleAccept = (quotationId) => {
    setQuotations(quotations.map(quotation => {
      if (quotation.id === quotationId) {
        return {
          ...quotation,
          status: 'accepted',
          followUpDate: null
        };
      }
      return quotation;
    }));
  };

  // Handle marking quotation as rejected
  const handleReject = (quotationId) => {
    setQuotations(quotations.map(quotation => {
      if (quotation.id === quotationId) {
        return {
          ...quotation,
          status: 'rejected',
          followUpDate: null
        };
      }
      return quotation;
    }));
  };

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-md">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Quotations</h1>
          <p className="text-sm text-text-secondary mt-1">Manage quotations and proposals</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-text-secondary">
            <i className="fas fa-calendar-alt mr-sm"></i> 
            Current Date & Time: 2025-06-04 10:01:27 UTC
          </p>
          <p className="text-text-secondary">
            <i className="fas fa-user mr-sm"></i> 
            Logged in as: amit24ve
          </p>
        </div>
      </div>

      {/* Quotation Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
        <div className="bg-bg-card p-md rounded-md shadow-sm">
          <h3 className="text-text-secondary text-sm mb-xs">Total Quotations</h3>
          <p className="text-2xl font-bold">{quotations.length}</p>
          <p className="text-sm text-text-secondary mt-xs">
            {totalSent} sent, {quotations.filter(q => q.status === 'draft').length} drafts
          </p>
        </div>
        
        <div className="bg-bg-card p-md rounded-md shadow-sm">
          <h3 className="text-text-secondary text-sm mb-xs">Acceptance Rate</h3>
          <p className="text-2xl font-bold text-green-600">{acceptanceRate}%</p>
          <p className="text-sm text-text-secondary mt-xs">
            {totalAccepted} accepted quotations
          </p>
        </div>
        
        <div className="bg-bg-card p-md rounded-md shadow-sm">
          <h3 className="text-text-secondary text-sm mb-xs">Total Value</h3>
          <p className="text-2xl font-bold">₹{totalValue.toLocaleString()}</p>
          <p className="text-sm text-text-secondary mt-xs">
            Average: ₹{Math.round(totalValue / quotations.length).toLocaleString()}
          </p>
        </div>
        
        <div className="bg-bg-card p-md rounded-md shadow-sm">
          <h3 className="text-text-secondary text-sm mb-xs">Follow-ups Due</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {quotations.filter(q => q.followUpDate).length}
          </p>
          <p className="text-sm text-text-secondary mt-xs">
            Next: {quotations
              .filter(q => q.followUpDate)
              .sort((a, b) => new Date(a.followUpDate) - new Date(b.followUpDate))[0]?.followUpDate || 'None'}
          </p>
        </div>
      </div>

      {/* Filters and Action Button */}
      <div className="flex flex-wrap justify-between items-center mb-md">
        <div className="flex flex-wrap gap-md items-center">
          <div className="flex items-center gap-sm">
            <label htmlFor="status-filter" className="text-sm text-text-secondary">Status:</label>
            <select 
              id="status-filter"
              className="border border-light p-2 rounded-md text-sm"
            >
              <option value="">All Statuses</option>
              <option value="draft">Draft</option>
              <option value="sent">Sent</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          
          <div className="flex items-center gap-sm">
            <label htmlFor="date-range" className="text-sm text-text-secondary">Date Range:</label>
            <input 
              type="date" 
              id="date-from" 
              className="border border-light p-2 rounded-md text-sm"
            />
            <span className="text-sm text-text-secondary">to</span>
            <input 
              type="date" 
              id="date-to" 
              className="border border-light p-2 rounded-md text-sm"
            />
          </div>
        </div>
        
        <button className="bg-secondary text-white border-none py-sm px-md rounded-md cursor-pointer flex items-center gap-sm hover:bg-blue-700 mt-sm md:mt-0">
          <i className="fas fa-plus"></i> New Quotation
        </button>
      </div>

      {/* Quotations Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-bg-card rounded-md overflow-hidden mb-md">
          <thead>
            <tr>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Quotation ID</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Client</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Amount</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Status</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Created Date</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Expiry Date</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Items</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotations.map(quotation => (
              <tr key={quotation.id} className="border-b border-light hover:bg-blue-50">
                <td className="p-md">{quotation.id}</td>
                <td className="p-md">
                  <div>
                    <div className="font-medium">{quotation.client}</div>
                    <div className="text-sm text-text-secondary">{quotation.clientId}</div>
                  </div>
                </td>
                <td className="p-md font-medium">₹{quotation.amount.toLocaleString()}</td>
                <td className="p-md">
                  <span className={`py-1 px-2 rounded-full text-xs font-medium text-center inline-block min-w-[80px]
                    ${quotation.status === 'sent' ? 'bg-blue-100 text-blue-600' : 
                      quotation.status === 'draft' ? 'bg-gray-100 text-gray-600' :
                      quotation.status === 'accepted' ? 'bg-green-100 text-green-600' : 
                      'bg-red-100 text-red-600'}`}>
                    {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                  </span>
                </td>
                <td className="p-md">{quotation.createdDate}</td>
                <td className="p-md">{quotation.expiryDate}</td>
                <td className="p-md text-center">{quotation.items}</td>
                <td className="p-md">
                  <div className="flex gap-sm">
                    <button className="flex items-center gap-1 bg-light text-text-primary border-none py-1.5 px-2.5 rounded-sm text-sm cursor-pointer hover:bg-muted hover:text-white transition-colors">
                      <i className="fas fa-eye"></i>
                      <span className="hidden sm:inline">View</span>
                    </button>
                    
                    <button className="flex items-center gap-1 bg-light text-text-primary border-none py-1.5 px-2.5 rounded-sm text-sm cursor-pointer hover:bg-muted hover:text-white transition-colors">
                      <i className="fas fa-edit"></i>
                      <span className="hidden sm:inline">Edit</span>
                    </button>
                    
                    {quotation.status === 'sent' && (
                      <>
                        <button 
                          onClick={() => handleAccept(quotation.id)}
                          className="flex items-center gap-1 bg-light text-text-primary border-none py-1.5 px-2.5 rounded-sm text-sm cursor-pointer hover:bg-green-500 hover:text-white transition-colors"
                        >
                          <i className="fas fa-check"></i>
                          <span className="hidden sm:inline">Accept</span>
                        </button>
                        <button 
                          onClick={() => handleReject(quotation.id)}
                          className="flex items-center gap-1 bg-light text-text-primary border-none py-1.5 px-2.5 rounded-sm text-sm cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <i className="fas fa-times"></i>
                          <span className="hidden sm:inline">Reject</span>
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-md bg-bg-card rounded-md">
        <div className="pagination-info text-sm text-text-secondary">
          Showing <strong>1-5</strong> of <strong>5</strong> quotations
        </div>
        <div className="pagination-controls flex gap-sm">
          <button 
            disabled={true}
            className="w-8 h-8 bg-light border-none rounded-sm flex items-center justify-center
                     hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button className="w-8 h-8 border-none rounded-sm flex items-center justify-center bg-secondary text-white">
            1
          </button>
          
          <button 
            disabled={true}
            className="w-8 h-8 bg-light border-none rounded-sm flex items-center justify-center
                     hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotationsPage;