import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import DashboardTable from './DashboardTable';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const currentDateTime = '2025-06-05 09:53:30';
  const currentUser = 'amit24ve';
  // Add state to track whether to show all meetings
  const [showAllMeetings, setShowAllMeetings] = useState(false);

  useEffect(() => {
    const ctx = document.getElementById('revenueChart');
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Revenue',
              data: [35000, 42000, 38000, 53000, 48000, 61000],
              borderColor: '#4361EE',
              backgroundColor: 'rgba(67, 97, 238, 0.1)',
              tension: 0.3,
              fill: true,
            },
            {
              label: 'Expenses',
              data: [19000, 23000, 25000, 28000, 26000, 32000],
              borderColor: '#F72585',
              backgroundColor: 'rgba(247, 37, 133, 0.1)',
              tension: 0.3,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });

      return () => chart.destroy();
    }
  }, []);

  const statsData = [
    {
      title: 'Total Revenue',
      value: '₹48,35,290',
      trend: '+12%',
      icon: 'rupee-sign',
      trendDirection: 'positive',
      note: 'vs last month',
    },
    {
      title: 'New Leads',
      value: '284',
      trend: '+8%',
      icon: 'user-plus',
      trendDirection: 'positive',
      note: 'vs last month',
    },
    {
      title: 'Conversions',
      value: '75',
      trend: '-3%',
      icon: 'handshake',
      trendDirection: 'negative',
      note: 'vs last month',
    },
    {
      title: 'Open Tickets',
      value: '32',
      trend: '-15%',
      icon: 'ticket-alt',
      trendDirection: 'positive',
      note: 'vs last month',
    },
  ];

  // Today's meetings data matching the screenshot
  const todayMeetings = [
    {
      time: '10:00 AM',
      name: 'Amit Sharma',
      location: 'Lucknow, Uttar Pradesh',
      status: 'Confirmed',
      bgColor: 'bg-blue-50',
      timeColor: 'text-blue-600',
      statusBg: 'bg-green-100',
      statusText: 'text-green-800',
      purpose: 'Product Demo',
      duration: '45 min',
      contact: '+91 9876543210',
      notes: 'Prepare marketing materials'
    },
    {
      time: '2:30 PM',
      name: 'Priya Singh',
      location: 'South Delhi, Delhi',
      status: 'Pending',
      bgColor: 'bg-yellow-50',
      timeColor: 'text-yellow-600',
      statusBg: 'bg-yellow-100',
      statusText: 'text-yellow-800',
      purpose: 'Initial Consultation',
      duration: '60 min',
      contact: '+91 9876543211',
      notes: 'Prospect interested in enterprise plan'
    },
    {
      time: '3:45 PM',
      name: 'Sneha Patel',
      location: 'Ahmedabad, Gujarat',
      status: 'Confirmed',
      bgColor: 'bg-green-50',
      timeColor: 'text-green-600',
      statusBg: 'bg-green-100',
      statusText: 'text-green-800',
      purpose: 'Contract Signing',
      duration: '30 min',
      contact: '+91 9876543212',
      notes: 'Bring final proposal documents'
    }
  ];
  
  // Extended meetings list for the full table view
  const allMeetings = [
    ...todayMeetings,
    {
      time: '5:15 PM',
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      status: 'Confirmed',
      bgColor: 'bg-blue-50',
      timeColor: 'text-blue-600',
      statusBg: 'bg-green-100',
      statusText: 'text-green-800',
      purpose: 'Follow-up Discussion',
      duration: '45 min',
      contact: '+91 9876543213',
      notes: 'Discuss implementation timeline'
    },
    {
      time: '6:00 PM',
      name: 'Anita Desai',
      location: 'Pune, Maharashtra',
      status: 'Canceled',
      bgColor: 'bg-red-50',
      timeColor: 'text-red-600',
      statusBg: 'bg-red-100',
      statusText: 'text-red-800',
      purpose: 'Project Review',
      duration: '60 min',
      contact: '+91 9876543214',
      notes: 'Client asked to reschedule'
    },
    {
      time: 'Tomorrow 9:30 AM',
      name: 'Vikram Reddy',
      location: 'Hyderabad, Telangana',
      status: 'Scheduled',
      bgColor: 'bg-purple-50',
      timeColor: 'text-purple-600',
      statusBg: 'bg-purple-100',
      statusText: 'text-purple-800',
      purpose: 'Product Training',
      duration: '90 min',
      contact: '+91 9876543215',
      notes: 'Team of 5 attendees'
    }
  ];

  const pendingApprovals = [
    {
      title: 'Franchise Application',
      description: 'Ahmedabad, Gujarat - Submitted by Suresh Patel',
    },
    {
      title: 'Discount Request',
      description: '12% on Bulk Order - Requested by Amit Sharma',
    },
    {
      title: 'Leave Application',
      description: 'June 10-15, 2025 - Neha Gupta',
    },
  ];

  const activityLogs = [
    {
      actor: 'Rajesh Kumar',
      action: 'approved franchise application for',
      target: 'Chennai South',
      time: '10 minutes ago',
      icon: 'user-check',
    },
    {
      actor: 'Priya Singh',
      action: 'generated invoice',
      target: '#INV-2025-0683',
      time: '45 minutes ago',
      icon: 'file-invoice',
    },
    {
      actor: 'Amit Sharma',
      action: 'added comment to lead',
      target: '#L-2025-1542',
      time: '1 hour ago',
      icon: 'comment-alt',
    },
    {
      actor: 'Sanjay Patel',
      action: 'completed task',
      target: 'Inventory Audit',
      time: '3 hours ago',
      icon: 'tasks',
    },
  ];

  // Function to toggle between preview and full meetings view
  const toggleMeetingsView = () => {
    setShowAllMeetings(!showAllMeetings);
  };

  return (
    <div className="page-content p-4 text-[15px]">
      {/* Role Tabs */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex gap-2 flex-wrap">
          {['admin', 'sales', 'franchise', 'support'].map((role) => (
            <button
              key={role}
              onClick={() => setActiveTab(role)}
              className={`px-4 py-1.5 text-sm rounded-md font-medium transition ${
                activeTab === role
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Today's Schedule Section - Added as per screenshot */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              <i className="far fa-calendar text-xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Today's Schedule</h2>
              <p className="text-gray-600">You have {todayMeetings.length} meetings scheduled for today</p>
            </div>
          </div>
          <button 
            onClick={toggleMeetingsView}
            className="px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            {showAllMeetings ? "Hide Details" : "View All Meetings"}
          </button>
        </div>

        {/* Conditional rendering based on showAllMeetings state */}
        {!showAllMeetings ? (
          <div className="px-5 pb-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {todayMeetings.map((meeting, idx) => (
              <div key={idx} className={`${meeting.bgColor} rounded-lg p-5`}>
                <div className="flex justify-between items-start mb-3">
                  <div className={`text-xl font-semibold ${meeting.timeColor}`}>
                    {meeting.time}
                  </div>
                  <span className={`${meeting.statusBg} ${meeting.statusText} text-xs px-3 py-1 rounded-full font-medium`}>
                    {meeting.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{meeting.name}</h3>
                <p className="text-gray-600">{meeting.location}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Purpose
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Duration
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Contact
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allMeetings.map((meeting, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-4 py-3 whitespace-nowrap ${meeting.timeColor} font-medium`}>
                        {meeting.time}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{meeting.name}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-700">{meeting.location}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2.5 py-1 inline-flex items-center text-xs font-medium rounded-full ${meeting.statusBg} ${meeting.statusText}`}>
                          {meeting.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-gray-700">{meeting.purpose}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap hidden lg:table-cell">
                        <div className="text-sm text-gray-700">{meeting.duration}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap hidden lg:table-cell">
                        <div className="text-sm text-gray-700">{meeting.contact}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-right">
                        <div className="flex justify-center gap-1">
                          <button className="text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-100 transition-colors p-1.5 rounded" title="View Details">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-gray-600 hover:text-green-600 bg-gray-100 hover:bg-green-100 transition-colors p-1.5 rounded" title="Edit Meeting">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-gray-600 hover:text-red-600 bg-gray-100 hover:bg-red-100 transition-colors p-1.5 rounded" title="Cancel Meeting">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                <i className={`fas fa-${stat.icon}`}></i>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">{stat.value}</h2>
            <div className="text-sm mt-1 flex items-center">
              <span
                className={`flex items-center font-medium ${
                  stat.trendDirection === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                <i
                  className={`fas fa-arrow-${stat.trendDirection === 'positive' ? 'up' : 'down'} mr-1`}
                ></i>
                {stat.trend}
              </span>
              <span className="ml-2 text-xs text-gray-500">{stat.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-base font-semibold text-gray-800">Revenue Overview</h3>
          <div className="flex gap-2">
            <button className="text-gray-600 hover:text-black p-1.5 rounded hover:bg-gray-100">
              <i className="fas fa-download"></i>
            </button>
            <button className="text-gray-600 hover:text-black p-1.5 rounded hover:bg-gray-100">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="h-[320px]">
            <canvas id="revenueChart"></canvas>
          </div>
        </div>
      </div>

      {/* Approvals & Activity Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Approvals */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-base font-semibold text-gray-800">Pending Approvals</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <ul className="divide-y text-sm">
            {pendingApprovals.map((item, idx) => (
              <li key={idx} className="p-4 hover:bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between gap-3">
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">Approve</button>
                    <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">Reject</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-base font-semibold text-gray-800">Activity Log</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <ul className="divide-y text-sm">
            {activityLogs.map((log, idx) => (
              <li key={idx} className="p-4 flex gap-3 hover:bg-gray-50">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`fas fa-${log.icon}`}></i>
                </div>
                <div className="flex-1">
                  <p>
                    <span className="font-semibold">{log.actor}</span> {log.action}{' '}
                    <span className="font-semibold">{log.target}</span>
                  </p>
                  <span className="text-xs text-gray-500">{log.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <DashboardTable /> */}
    </div>
  );
};

export default Dashboard;