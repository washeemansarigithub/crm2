import React, { useEffect, useState } from 'react';

const QuotationsPage = () => {
  useEffect(() => {
    document.title = 'Bharat CRM - Quotations';
  }, []);

  const [quotations, setQuotations] = useState([
    {
      id: 'Q-2025-0056', client: 'Vikram Sharma', clientId: 'C-2025-0124', amount: 54000,
      status: 'sent', createdDate: '2025-06-01', expiryDate: '2025-06-15', items: 3, followUpDate: '2025-06-07'
    },
    {
      id: 'Q-2025-0055', client: 'Priya Patel', clientId: 'C-2025-0123', amount: 32500,
      status: 'draft', createdDate: '2025-05-30', expiryDate: '2025-06-14', items: 2, followUpDate: '2025-06-06'
    },
    {
      id: 'Q-2025-0054', client: 'Rajesh Kumar', clientId: 'C-2025-0122', amount: 41200,
      status: 'accepted', createdDate: '2025-05-28', expiryDate: '2025-06-11', items: 4, followUpDate: null
    },
    {
      id: 'Q-2025-0053', client: 'Anita Desai', clientId: 'C-2025-0121', amount: 22800,
      status: 'rejected', createdDate: '2025-05-25', expiryDate: '2025-06-08', items: 1, followUpDate: null
    },
    {
      id: 'Q-2025-0052', client: 'Sanjay Gupta', clientId: 'C-2025-0120', amount: 68500,
      status: 'accepted', createdDate: '2025-05-22', expiryDate: '2025-06-05', items: 5, followUpDate: null
    }
  ]);

  const totalSent = quotations.filter(q => q.status === 'sent').length;
  const totalAccepted = quotations.filter(q => q.status === 'accepted').length;
  const totalValue = quotations.reduce((sum, q) => sum + q.amount, 0);
  const acceptanceRate = Math.round((totalAccepted / (totalAccepted + quotations.filter(q => q.status === 'rejected').length)) * 100);

  const handleAccept = (id) => {
    setQuotations(prev => prev.map(q => q.id === id ? { ...q, status: 'accepted', followUpDate: null } : q));
  };

  const handleReject = (id) => {
    setQuotations(prev => prev.map(q => q.id === id ? { ...q, status: 'rejected', followUpDate: null } : q));
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Quotations</h1>
          <p className="text-sm text-gray-600">Manage quotations and proposals</p>
        </div>
        <div className="text-sm text-gray-600">
          <p><i className="fas fa-calendar-alt mr-2" />Current Date: 2025-06-04 10:01:27 UTC</p>
          <p><i className="fas fa-user mr-2" />Logged in as: amit24ve</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Total Quotations" value={quotations.length} subtitle={`${totalSent} sent, ${quotations.filter(q => q.status === 'draft').length} drafts`} />
        <SummaryCard title="Acceptance Rate" value={`${acceptanceRate}%`} subtitle={`${totalAccepted} accepted quotations`} color="text-green-600" />
        <SummaryCard title="Total Value" value={`₹${totalValue.toLocaleString()}`} subtitle={`Avg: ₹${Math.round(totalValue / quotations.length).toLocaleString()}`} />
        <SummaryCard 
          title="Follow-ups Due" 
          value={quotations.filter(q => q.followUpDate).length} 
          subtitle={`Next: ${quotations.filter(q => q.followUpDate).sort((a, b) => new Date(a.followUpDate) - new Date(b.followUpDate))[0]?.followUpDate || 'None'}`} 
          color="text-yellow-600"
        />
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-2 flex-wrap items-center">
          <label className="text-sm">Status:</label>
          <select className="p-2 border rounded text-sm">
            <option>All</option><option>Draft</option><option>Sent</option><option>Accepted</option><option>Rejected</option>
          </select>

          <label className="text-sm ml-2">Date:</label>
          <input type="date" className="p-2 border rounded text-sm" />
          <span className="text-sm">to</span>
          <input type="date" className="p-2 border rounded text-sm" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <i className="fas fa-plus mr-1" /> New Quotation
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-3">ID</th><th className="p-3">Client</th><th className="p-3">Amount</th><th className="p-3">Status</th>
              <th className="p-3">Created</th><th className="p-3">Expiry</th><th className="p-3">Items</th><th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotations.map(q => (
              <tr key={q.id} className="border-t hover:bg-gray-50">
                <td className="p-3 text-sm">{q.id}</td>
                <td className="p-3 text-sm">
                  <div className="font-medium">{q.client}</div>
                  <div className="text-xs text-gray-500">{q.clientId}</div>
                </td>
                <td className="p-3 text-sm">₹{q.amount.toLocaleString()}</td>
                <td className="p-3">
                  <span className={`text-xs py-1 px-2 rounded-full inline-block
                    ${q.status === 'sent' ? 'bg-blue-100 text-blue-600' :
                      q.status === 'draft' ? 'bg-gray-200 text-gray-700' :
                      q.status === 'accepted' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{q.status}</span>
                </td>
                <td className="p-3 text-sm">{q.createdDate}</td>
                <td className="p-3 text-sm">{q.expiryDate}</td>
                <td className="p-3 text-sm text-center">{q.items}</td>
                <td className="p-3 text-sm">
                  <div className="flex flex-wrap gap-2">
                    <ActionBtn icon="eye" label="View" />
                    <ActionBtn icon="edit" label="Edit" />
                    {q.status === 'sent' && (
                      <>
                        <ActionBtn icon="check" label="Accept" onClick={() => handleAccept(q.id)} bgColor="green" />
                        <ActionBtn icon="times" label="Reject" onClick={() => handleReject(q.id)} bgColor="red" />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm bg-gray-100 p-3 rounded">
        <div>Showing 1-5 of 5 quotations</div>
        <div className="flex gap-2">
          <button disabled className="px-2 py-1 rounded bg-gray-200"><i className="fas fa-chevron-left" /></button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
          <button disabled className="px-2 py-1 rounded bg-gray-200"><i className="fas fa-chevron-right" /></button>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, subtitle, color = "" }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
    <p className={`text-xl font-bold ${color}`}>{value}</p>
    <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
  </div>
);

const ActionBtn = ({ icon, label, onClick, bgColor = 'gray' }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1 px-3 py-1 rounded text-sm border hover:text-white hover:bg-${bgColor}-500 transition`}
  >
    <i className={`fas fa-${icon}`}></i><span className="hidden sm:inline">{label}</span>
  </button>
);

export default QuotationsPage;