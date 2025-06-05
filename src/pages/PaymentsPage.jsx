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
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header with Meta Information */}
      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Payment Tracking</h1>
            <p className="text-sm text-gray-500 mt-1">Track invoices and manage payments</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-3">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <i className="fas fa-plus"></i> New Invoice
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 text-sm flex flex-wrap justify-between">
          <div className="text-gray-600">
            <i className="far fa-clock mr-2"></i>2025-06-05 09:33:08 (UTC)
          </div>
          <div className="text-gray-600">
            <i className="far fa-user mr-2"></i>Logged in as: amit24ve
          </div>
        </div>
      </div>

      {/* Payment Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm mb-1">Total Received</h3>
          <p className="text-2xl font-bold text-green-600">₹{totalReceived.toLocaleString()}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-500">
              {payments.filter(p => p.status === 'paid').length} paid invoices
            </p>
            <span className="text-green-500 text-lg">
              <i className="fas fa-check-circle"></i>
            </span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm mb-1">Pending Payments</h3>
          <p className="text-2xl font-bold text-yellow-600">₹{totalPending.toLocaleString()}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-500">
              {payments.filter(p => p.status === 'pending').length} pending invoices
            </p>
            <span className="text-yellow-500 text-lg">
              <i className="fas fa-clock"></i>
            </span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-500">
          <h3 className="text-gray-500 text-sm mb-1">Overdue Payments</h3>
          <p className="text-2xl font-bold text-red-600">₹{totalOverdue.toLocaleString()}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-500">
              {payments.filter(p => p.status === 'overdue').length} overdue invoices
            </p>
            <span className="text-red-500 text-lg">
              <i className="fas fa-exclamation-circle"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter Invoices</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              id="status-filter"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Statuses</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="date-from" className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
            <input 
              type="date" 
              id="date-from" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="date-to" className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
            <input 
              type="date" 
              id="date-to" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors mr-2">
            Reset Filters
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Payments Table - IMPROVED UI */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Invoice Database</h2>
          <div className="text-sm text-gray-500">
            Total: {payments.length} invoices
          </div>
        </div>
        
        {/* Responsive Table with ENHANCED UI */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
          <thead>
  <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-600 uppercase tracking-wider">
    <th className="px-4 py-2 text-left font-semibold">Invoice ID</th>
    <th className="px-4 py-2 text-left font-semibold">Client</th>
    <th className="px-4 py-2 text-left font-semibold">Amount</th>
    <th className="px-4 py-2 text-left font-semibold">Status</th>
    <th className="px-4 py-2 text-left font-semibold hidden lg:table-cell">Invoice Date</th>
    <th className="px-4 py-2 text-left font-semibold hidden md:table-cell">Due Date</th>
    <th className="px-4 py-2 text-left font-semibold hidden lg:table-cell">Payment Date</th>
    <th className="px-4 py-2 text-center font-semibold">Actions</th>
  </tr>
</thead>
<tbody>
  {payments.map((payment, index) => (
    <tr
      key={payment.id}
      className={`${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      } border-b border-gray-100 hover:bg-blue-50 transition-colors`}
    >
      <td className="px-4 py-3 text-sm text-gray-800 font-medium whitespace-nowrap">{payment.id}</td>
      <td className="px-4 py-3 text-sm text-gray-800">
        {payment.client}
        <div className="text-xs text-gray-500">{payment.clientId}</div>
      </td>
      <td className="px-4 py-3 text-sm text-gray-800 font-semibold whitespace-nowrap">
        ₹{payment.amount.toLocaleString()}
      </td>
      <td className="px-4 py-3 text-sm whitespace-nowrap">
        <span
          className={`px-2 py-1 inline-flex items-center rounded-full text-xs font-medium ${
            payment.status === 'paid'
              ? 'bg-green-100 text-green-700 border border-green-200'
              : payment.status === 'pending'
              ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}
        >
          {payment.status === 'paid' && <i className="fas fa-check-circle mr-1.5"></i>}
          {payment.status === 'pending' && <i className="fas fa-clock mr-1.5"></i>}
          {payment.status === 'overdue' && <i className="fas fa-exclamation-circle mr-1.5"></i>}
          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
        </span>
        <div className="text-xs text-gray-500 mt-1 md:hidden">Due: {payment.dueDate}</div>
      </td>
      <td className="px-4 py-3 text-xs text-gray-600 hidden lg:table-cell">{payment.invoiceDate}</td>
      <td className="px-4 py-3 text-xs text-gray-600 hidden md:table-cell">{payment.dueDate}</td>
      <td className="px-4 py-3 text-xs text-gray-600 hidden lg:table-cell">{payment.paymentDate || '—'}</td>
      <td className="px-4 py-3 text-center">
        <div className="flex justify-center gap-1">
          <button
            className="text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 border border-gray-200 p-1.5 rounded"
            title="View Invoice"
          >
            <i className="fas fa-eye text-sm"></i>
          </button>
          {payment.status !== 'paid' && (
            <>
              <button
                onClick={() => handleSendReminder(payment.id)}
                className="text-gray-600 hover:text-yellow-600 bg-gray-100 hover:bg-yellow-50 border border-gray-200 p-1.5 rounded"
                title="Send Reminder"
              >
                <i className="fas fa-bell text-sm"></i>
              </button>
              <button
                onClick={() => handleMarkPaid(payment.id)}
                className="text-gray-600 hover:text-green-600 bg-gray-100 hover:bg-green-50 border border-gray-200 p-1.5 rounded"
                title="Mark as Paid"
              >
                <i className="fas fa-check text-sm"></i>
              </button>
            </>
          )}
          <button
            className="text-gray-600 hover:text-purple-600 bg-gray-100 hover:bg-purple-50 border border-gray-200 p-1.5 rounded"
            title="More Options"
          >
            <i className="fas fa-ellipsis-v text-sm"></i>
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between">
          <div className="text-sm text-gray-700 mb-2 sm:mb-0">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
            <span className="font-medium">5</span> invoices
          </div>
          
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <span className="sr-only">Previous</span>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-sm font-medium text-white"
            >
              1
            </button>
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <span className="sr-only">Next</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;