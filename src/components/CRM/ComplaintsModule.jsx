// src/components/crm/ComplaintsModule.jsx
import React, { useState } from 'react';

const ComplaintsModule = () => {
  const [complaints, setComplaints] = useState([]);
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.description) return;

    const newComplaint = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    setComplaints([newComplaint, ...complaints]);
    setFormData({ subject: '', description: '', status: 'Pending' });
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-3">Complaint / Service Request</h2>

      <form onSubmit={handleSubmit} className="mb-4 space-y-3">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full border p-2 rounded"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          className="w-full border p-2 rounded"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit Complaint
        </button>
      </form>

      <div>
        <h3 className="font-medium mb-2">Complaint History</h3>
        {complaints.length === 0 ? (
          <p>No complaints submitted yet.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {complaints.map((comp) => (
              <li key={comp.id} className="border p-2 rounded">
                <p><strong>{comp.date}</strong> - {comp.subject}</p>
                <p>{comp.description}</p>
                <p className="text-blue-600">Status: {comp.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ComplaintsModule;

