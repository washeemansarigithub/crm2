import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import LeadsPage from './pages/LeadsPage';
import LeadManagement from './components/leads/LeadManagement';
import QuotationPage from './pages/QuotationsPage';
import PaymentsPage from './pages/PaymentsPage';
import CRMPage from './pages/CRMPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* 🟢 Leads & Sales Sub Routes */}
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/leads/LeadManagement" element={<LeadManagement />} />
          <Route path="/leads/quotations" element={<QuotationPage />} />
          <Route path="/leads/payments" element={<PaymentsPage />} />

          {/* Placeholder Routes */}
          <Route path="/franchise/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Franchise Management</h1></div>} />
          <Route path="/customers" element={<CRMPage/>} />
          <Route path="/hr/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">HR & Staff</h1></div>} />
          <Route path="/inventory/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Inventory Management</h1></div>} />
          <Route path="/accounts/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Accounts</h1></div>} />
          <Route path="/tasks/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Tasks & Workflow</h1></div>} />
          <Route path="/tickets/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Support Tickets</h1></div>} />
          <Route path="/documents/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Documents</h1></div>} />
          <Route path="/marketing/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Marketing</h1></div>} />
          <Route path="/reports/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Reports</h1></div>} />
          <Route path="/admin/*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Admin Panel</h1></div>} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<div className="p-4"><h1 className="text-2xl font-bold mb-4">Page Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
