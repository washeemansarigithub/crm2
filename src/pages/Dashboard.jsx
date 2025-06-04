import React from 'react';

const Dashboard = () => {
  // Use the specified date and login
  const currentDateTime = '2025-06-04 13:10:55';
  const currentUser = 'amit24ve';

  // Sample data for dashboard widgets
  const salesData = {
    thisMonth: 145000,
    lastMonth: 128500,
    growth: 12.8
  };
  
  const leadsData = {
    new: 24,
    contacted: 18,
    qualified: 12,
    proposal: 8,
    converted: 6,
    lost: 3
  };
  
  const upcomingTasks = [
    { id: 1, title: 'Follow up with Vikram Sharma', due: '2025-06-05', priority: 'High' },
    { id: 2, title: 'Prepare proposal for Mehta Enterprises', due: '2025-06-06', priority: 'Medium' },
    { id: 3, title: 'Schedule demo with Reliance Industries', due: '2025-06-07', priority: 'High' },
    { id: 4, title: 'Update product catalog', due: '2025-06-08', priority: 'Low' }
  ];
  
  const recentActivities = [
    { id: 1, action: 'Added new lead', target: 'Vikram Sharma', time: '2 hours ago', icon: 'user-plus', color: 'blue' },
    { id: 2, action: 'Updated proposal for', target: 'Priya Patel', time: '4 hours ago', icon: 'file-edit', color: 'purple' },
    { id: 3, action: 'Converted lead', target: 'Sanjay Gupta', time: '1 day ago', icon: 'check-circle', color: 'green' },
    { id: 4, action: 'Scheduled follow-up with', target: 'Rajesh Kumar', time: '1 day ago', icon: 'calendar', color: 'orange' }
  ];
  
  // Lead status colors
  const statusColors = {
    new: 'bg-blue-100 text-blue-600 border-blue-200',
    contacted: 'bg-purple-100 text-purple-600 border-purple-200',
    qualified: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    proposal: 'bg-orange-100 text-orange-600 border-orange-200',
    converted: 'bg-green-100 text-green-600 border-green-200',
    lost: 'bg-red-100 text-red-600 border-red-200'
  };

  // Chart colors for bars
  const chartColors = {
    new: 'bg-blue-500',
    contacted: 'bg-purple-500',
    qualified: 'bg-yellow-500',
    proposal: 'bg-orange-500',
    converted: 'bg-green-500',
    lost: 'bg-red-500'
  };
  
  return (
    <div className="p-1 md:p-2">
      {/* Dashboard Header with Responsive Layout */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="mt-2 sm:mt-0 text-sm text-gray-600">
          <div className="flex items-center">
            <i className="far fa-calendar-alt mr-2"></i>
            <span>{currentDateTime}</span>
          </div>
          <div className="flex items-center mt-1 justify-end">
            <i className="far fa-user mr-2"></i>
            <span>Logged in as: {currentUser}</span>
          </div>
        </div>
      </div>
      
      {/* Stats Cards - Enhanced with Better Visual Hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Sales */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-800">₹{salesData.thisMonth.toLocaleString()}</p>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-green-600 font-medium">
              <i className="fas fa-arrow-up mr-1 text-xs"></i>
              {salesData.growth}%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>
        
        {/* Total Leads */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Total Leads</h3>
          <p className="text-2xl font-bold text-gray-800">71</p>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-green-600 font-medium">
              <i className="fas fa-arrow-up mr-1 text-xs"></i>
              8%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>
        
        {/* Conversion Rate */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Conversion Rate</h3>
          <p className="text-2xl font-bold text-gray-800">8%</p>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-green-600 font-medium">
              <i className="fas fa-arrow-up mr-1 text-xs"></i>
              2%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>
        
        {/* Avg. Deal Size */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all hover:shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Avg. Deal Size</h3>
          <p className="text-2xl font-bold text-gray-800">₹24,167</p>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-green-600 font-medium">
              <i className="fas fa-arrow-up mr-1 text-xs"></i>
              5%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>
      </div>
      
      {/* Lead Status and Tasks - Improved Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Lead Status Overview - Enhanced Visualization */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Lead Status Overview</h2>
            <div className="flex space-x-2">
              <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-2 rounded">Monthly</button>
              <button className="text-xs bg-blue-50 text-blue-700 py-1 px-2 rounded">Weekly</button>
            </div>
          </div>
          
          {/* Status Cards with Better Visibility */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
            {Object.entries(leadsData).map(([status, count]) => (
              <div key={status} className={`rounded-lg border p-3 text-center ${statusColors[status]}`}>
                <p className="font-medium mb-1 text-sm">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </p>
                <p className="text-xl font-bold">{count}</p>
              </div>
            ))}
          </div>
          
          {/* Improved Bar Chart Visualization */}
          <div className="h-48 mt-6 flex items-end gap-3 px-2">
            {Object.entries(leadsData).map(([status, count]) => {
              const maxCount = Math.max(...Object.values(leadsData));
              const height = Math.max((count / maxCount) * 100, 10); // Minimum 10% height for visibility
              
              return (
                <div key={status} className="flex flex-col items-center flex-1">
                  <div className="relative w-full flex-1 flex flex-col justify-end">
                    <div 
                      className={`w-full ${chartColors[status]} rounded-t`}
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-medium">
                    {status.charAt(0).toUpperCase() + status.slice(1).substring(0, 3)}.
                  </p>
                  <p className="text-xs font-medium">{count}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Upcoming Tasks - Enhanced Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Tasks</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              View All
              <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </button>
          </div>
          
          <div className="space-y-3">
            {upcomingTasks.map(task => (
              <div key={task.id} className="border-b border-gray-100 pb-3 last:border-0">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800">{task.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                    task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 
                    'bg-green-100 text-green-600'
                  }`}>{task.priority}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 flex items-center">
                  <i className="far fa-calendar-alt mr-1.5"></i>
                  Due: {task.due}
                </p>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md transition-colors">
            + Add New Task
          </button>
        </div>
      </div>
      
      {/* Recent Activities - Enhanced with Better Visual Cues */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
          <div className="flex items-center">
            <span className="hidden md:inline text-sm text-gray-500 mr-2">Filter:</span>
            <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white">
              <option>All Activities</option>
              <option>Leads</option>
              <option>Sales</option>
              <option>Tasks</option>
            </select>
          </div>
        </div>
        
        {/* Activity Timeline */}
        <div className="space-y-4">
          {recentActivities.map(activity => (
            <div key={activity.id} className="flex">
              <div className={`w-10 h-10 rounded-full bg-${activity.color}-100 flex items-center justify-center mr-4 flex-shrink-0`}>
                <i className={`fas fa-${activity.icon} text-${activity.color}-600`}></i>
              </div>
              
              <div className="flex-1 pb-4 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-gray-800">
                    <span>{activity.action}</span>{' '}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">{activity.time}</span>
                </div>
                
                <div className="flex mt-2 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-4">
                    <i className="far fa-comment mr-1"></i> Comment
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <i className="far fa-eye mr-1"></i> View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors border border-blue-200">
          Load More Activities
        </button>
      </div>

      {/* Extra Content for Larger Screens */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">Performance chart will be loaded here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">System Information</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span className="text-gray-600">Current Date/Time:</span>
              <span className="font-medium text-gray-800">{currentDateTime}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span className="text-gray-600">Current User:</span>
              <span className="font-medium text-gray-800">{currentUser}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span className="text-gray-600">Last Login:</span>
              <span className="font-medium text-gray-800">2025-06-04 09:22:15</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span className="text-gray-600">System Status:</span>
              <span className="text-green-600 font-medium">Online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Server Health:</span>
              <div className="w-20 bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;