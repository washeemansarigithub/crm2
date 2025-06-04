import LeadStatus from './LeadStatus';
import LeadSource from './LeadSource';

const LeadTable = () => {
  // Mock data - in real app this would come from an API
  const leads = [
    {
      id: 'L-2025-0124',
      name: 'Vikram Sharma',
      phone: '+91 9876543210',
      email: 'vikram.s@example.com',
      source: { icon: 'globe', name: 'Website' },
      status: 'new',
      createdDate: '2025-06-01',
      followUpDue: '2025-06-05'
    },
    {
      id: 'L-2025-0123',
      name: 'Priya Patel',
      phone: '+91 9876543211',
      email: 'priya.p@example.com',
      source: { icon: 'user-friends', name: 'Referral' },
      status: 'contacted',
      createdDate: '2025-05-29',
      followUpDue: '2025-06-04'
    },
    // Add the rest of the leads data here
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-bg-card rounded-md overflow-hidden mb-md">
        <thead>
          <tr>
            <th className="p-md text-left bg-light font-semibold text-text-primary">ID</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Name</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Phone</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Email</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Source</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Status</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Created Date</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Follow-up Due</th>
            <th className="p-md text-left bg-light font-semibold text-text-primary">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-light hover:bg-blue-50">
              <td className="p-md">{lead.id}</td>
              <td className="p-md">{lead.name}</td>
              <td className="p-md">{lead.phone}</td>
              <td className="p-md">{lead.email}</td>
              <td className="p-md">
                <LeadSource icon={lead.source.icon} name={lead.source.name} />
              </td>
              <td className="p-md">
                <LeadStatus status={lead.status} />
              </td>
              <td className="p-md">{lead.createdDate}</td>
              <td className="p-md">{lead.followUpDue}</td>
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;