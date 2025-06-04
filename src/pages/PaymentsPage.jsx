import React, { useEffect, useState } from 'react';

const PaymentsPage = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = 'Bharat CRM - Payment Tracking';
  }, []);

  // Sample data for payments
  const [payments, setPayments] = useState([
    {
      id: 'INV-2025-0045',
      client: 'Vikram Sharma',
      clientId: 'C-2025-0124',
      amount: 45000,
      status: 'paid',
      invoiceDate: '2025-05-20',
      dueDate: '2025-06-10',
      paymentDate: '2025-05-25'
    },
    {
      id: 'INV-2025-0044',
      client: 'Priya Patel',
      clientId: 'C-2025-0123',
      amount: 28500,
      status: 'pending',
      invoiceDate: '2025-05-18',
      dueDate: '2025-06-08',
      paymentDate: null
    },
    {
      id: 'INV-2025-0043',
      client: 'Rajesh Kumar',
      clientId: 'C-2025-0122',
      amount: 36000,
      status: 'overdue',
      invoiceDate: '2025-05-10',
      dueDate: '2025-05-30',
      paymentDate: null
    },
    {
      id: 'INV-2025-0042',
      client: 'Anita Desai',
      clientId: 'C-2025-0121',
      amount: 18500,
      status: 'paid',
      invoiceDate: '2025-05-08',
      dueDate: '2025-05-28',
      paymentDate: '2025-05-20'
    },
    {
      id: 'INV-2025-0041',
      client: 'Sanjay Gupta',
      clientId: 'C-2025-0120',
      amount: 54000,
      status: 'paid',
      invoiceDate: '2025-05-05',
      dueDate: '2025-05-25',
      paymentDate: '2025-05-15'
    }
  ]);

  // Calculate summary statistics
  const totalReceived = payments
    .filter(payment => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);
  
  const totalPending = payments
    .filter(payment => payment.status === 'pending')
    .reduce((sum, payment) => sum + payment.amount, 0);
  
  const totalOverdue = payments
    .filter(payment => payment.status === 'overdue')
    .reduce((sum, payment) => sum + payment.amount, 0);

  // Handle sending payment reminder
  const handleSendReminder = (paymentId) => {
    alert(`Payment reminder sent for invoice ${paymentId}`);
  };

  // Handle marking payment as received
  const handleMarkPaid = (paymentId) => {
    setPayments(payments.map(payment => {
      if (payment.id === paymentId) {
        return {
          ...payment,
          status: 'paid',
          paymentDate: new Date().toISOString().split('T')[0]
        };
      }
      return payment;
    }));
  };

  return (
    <div className="page-content">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-md">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Payment Tracking</h1>
          <p className="text-sm text-text-secondary mt-1">Track invoices and manage payments</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-text-secondary">
            <i className="fas fa-calendar-alt mr-sm"></i> 
            Current Date & Time: 2025-06-04 09:59:30 UTC
          </p>
          <p className="text-text-secondary">
            <i className="fas fa-user mr-sm"></i> 
            Logged in as: amit24ve
          </p>
        </div>
      </div>

      {/* Payment Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
        <div className="bg-bg-card p-md rounded-md shadow-sm">
          <h3 className="text-text-secondary text-sm mb-xs">Total Received</h3>
          <p className="text-2xl font-bold text-green-600">₹{totalReceived.toLocaleString()}</p>
          <p className="text-sm text-text-secondary mt-xs">
            {payments.filter(p => p.status === 'paid').length} paid invoices
          </p>
        </div>
        
        <div className="bg-bg-card p-md rounded-md shadow-sm">
          <h3 className="text-text-secondary text-sm mb-xs">Pending Payments</h3>
          <p className="text-2xl font-bold text-yellow-600">₹{totalPending.toLocaleString()}</p>
          <p className="text-sm text-text-secondary mt-xs">
            {payments.filter(p => p.status === 'pending').length} pending invoices
          </p>
        </div>
        
        <div className="bg-bg-card p-md rounded-md shadow-sm">
          <h3 className="text-text-secondary text-sm mb-xs">Overdue Payments</h3>
          <p className="text-2xl font-bold text-red-600">₹{totalOverdue.toLocaleString()}</p>
          <p className="text-sm text-text-secondary mt-xs">
            {payments.filter(p => p.status === 'overdue').length} overdue invoices
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
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
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
          <i className="fas fa-plus"></i> New Invoice
        </button>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-bg-card rounded-md overflow-hidden mb-md">
          <thead>
            <tr>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Invoice ID</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Client</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Amount</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Status</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Invoice Date</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Due Date</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Payment Date</th>
              <th className="p-md text-left bg-light font-semibold text-text-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id} className="border-b border-light hover:bg-blue-50">
                <td className="p-md">{payment.id}</td>
                <td className="p-md">
                  <div>
                    <div className="font-medium">{payment.client}</div>
                    <div className="text-sm text-text-secondary">{payment.clientId}</div>
                  </div>
                </td>
                <td className="p-md font-medium">₹{payment.amount.toLocaleString()}</td>
                <td className="p-md">
                  <span className={`py-1 px-2 rounded-full text-xs font-medium text-center inline-block min-w-[80px]
                    ${payment.status === 'paid' ? 'bg-green-100 text-green-600' : 
                      payment.status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-red-100 text-red-600'}`}>
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </span>
                </td>
                <td className="p-md">{payment.invoiceDate}</td>
                <td className="p-md">{payment.dueDate}</td>
                <td className="p-md">{payment.paymentDate || '-'}</td>
                <td className="p-md">
                  <div className="flex gap-sm">
                    <button className="flex items-center gap-1 bg-light text-text-primary border-none py-1.5 px-2.5 rounded-sm text-sm cursor-pointer hover:bg-muted hover:text-white transition-colors">
                      <i className="fas fa-eye"></i>
                      <span className="hidden sm:inline">View</span>
                    </button>
                    
                    {payment.status !== 'paid' && (
                      <>
                        <button 
                          onClick={() => handleSendReminder(payment.id)}
                          className="flex items-center gap-1 bg-light text-text-primary border-none py-1.5 px-2.5 rounded-sm text-sm cursor-pointer hover:bg-yellow-500 hover:text-white transition-colors"
                        >
                          <i className="fas fa-bell"></i>
                          <span className="hidden sm:inline">Remind</span>
                        </button>
                        <button 
                          onClick={() => handleMarkPaid(payment.id)}
                          className="flex items-center gap-1 bg-light text-text-primary border-none py-1.5 px-2.5 rounded-sm text-sm cursor-pointer hover:bg-green-500 hover:text-white transition-colors"
                        >
                          <i className="fas fa-check"></i>
                          <span className="hidden sm:inline">Mark Paid</span>
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
          Showing <strong>1-5</strong> of <strong>5</strong> invoices
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

export default PaymentsPage;