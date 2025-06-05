import React, { useState } from "react";
import { User2, Star, TrendingUp, Gift, ChevronDown, ChevronUp, Mail, Phone, MapPin, Calendar, Eye, ExternalLink, Search } from "lucide-react";

const CustomerProfile = () => {
  const [showList, setShowList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("grid"); // grid or list

  const customers = [
    {
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      phone: "9876543210",
      address: "Noida, Uttar Pradesh",
      joinedDate: "2023-11-25",
      status: "Active",
      isVip: true,
      revenue: 25000,
      loyaltyPoints: 150,
      lastPurchase: "2025-05-28",
      orders: 8
    },
    {
      name: "Anjali Verma",
      email: "anjali.verma@example.com",
      phone: "9123456780",
      address: "Lucknow, Uttar Pradesh",
      joinedDate: "2024-02-12",
      status: "Inactive",
      isVip: false,
      revenue: 10000,
      loyaltyPoints: 90,
      lastPurchase: "2025-03-15",
      orders: 3
    },
    {
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      phone: "9012345678",
      address: "Delhi",
      joinedDate: "2022-09-18",
      status: "Active",
      isVip: false,
      revenue: 43500,
      loyaltyPoints: 171,
      lastPurchase: "2025-06-01",
      orders: 12
    }
  ];

  // Filter customers based on search query
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
  );

  // 🧮 Summary values
  const totalCustomers = customers.length;
  const vipCustomers = customers.filter((c) => c.isVip).length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.revenue, 0);
  const avgLoyaltyPoints = Math.round(
    customers.reduce((sum, c) => sum + c.loyaltyPoints, 0) / totalCustomers
  );

  // Function to get first letter of first and last name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  // Function to format date in readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Page Heading with Breadcrumb */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">
          <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
          <span className="mx-2">/</span>
          <span className="text-blue-600">Customer Management</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Customer Management
          </h1>
          <div className="mt-3 sm:mt-0">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
              <User2 size={16} className="mr-2" /> Add New Customer
            </button>
          </div>
        </div>
        <p className="mt-2 text-gray-500">
          Manage and nurture your valuable customer relationships
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="bg-blue-100 p-2.5 rounded-lg">
              <User2 className="text-blue-600 w-6 h-6" />
            </div>
            <span className="text-green-500 text-sm font-medium flex items-center">
              <ChevronUp size={16} className="mr-1" /> 15%
            </span>
          </div>
          <p className="text-3xl font-bold mt-3 mb-1">{totalCustomers}</p>
          <p className="text-gray-600 text-sm">Total Customers</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="bg-purple-100 p-2.5 rounded-lg">
              <Star className="text-purple-600 w-6 h-6" />
            </div>
            <span className="text-purple-600 text-sm font-medium bg-purple-50 py-1 px-2 rounded-full">VIP</span>
          </div>
          <p className="text-3xl font-bold mt-3 mb-1">{vipCustomers}</p>
          <p className="text-gray-600 text-sm">VIP Customers</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="bg-green-100 p-2.5 rounded-lg">
              <TrendingUp className="text-green-600 w-6 h-6" />
            </div>
            <span className="text-green-600 text-sm font-medium">Revenue</span>
          </div>
          <p className="text-3xl font-bold mt-3 mb-1">₹{totalRevenue.toLocaleString()}</p>
          <p className="text-gray-600 text-sm">Total Revenue</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="bg-orange-100 p-2.5 rounded-lg">
              <Gift className="text-orange-600 w-6 h-6" />
            </div>
            <span className="text-orange-600 text-sm font-medium">Avg</span>
          </div>
          <p className="text-3xl font-bold mt-3 mb-1">{avgLoyaltyPoints}</p>
          <p className="text-gray-600 text-sm">Avg Loyalty Points</p>
        </div>
      </div>

      {/* Customer List Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Customer Details</h2>
          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full sm:w-64 pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="flex">
              <button
                className={`p-2 border ${viewType === 'grid' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-500'} rounded-l-lg`}
                onClick={() => setViewType("grid")}
                title="Grid View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                className={`p-2 border ${viewType === 'list' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-500'} rounded-r-lg`}
                onClick={() => setViewType("list")}
                title="List View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
            <button
              className="flex items-center justify-center text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition border border-blue-200"
              onClick={() => setShowList(!showList)}
            >
              {showList ? (
                <>
                  <ChevronUp size={18} className="mr-1" /> Hide Customers
                </>
              ) : (
                <>
                  <ChevronDown size={18} className="mr-1" /> Show Customers
                </>
              )}
            </button>
          </div>
        </div>

        {/* Customer List Content */}
        {showList && (
          <div className="p-4 transition-all duration-300">
            {filteredCustomers.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 text-5xl mb-4">
                  <User2 className="mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-700">No customers found</h3>
                <p className="text-gray-500 mt-1">Try adjusting your search query</p>
              </div>
            ) : viewType === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCustomers.map((customer, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-sm rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start mb-4">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-semibold ${
                          customer.isVip ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'
                        }`}
                      >
                        {getInitials(customer.name)}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-semibold text-gray-800">{customer.name}</h3>
                          <span 
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              customer.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{customer.isVip && (
                          <span className="bg-purple-50 text-purple-700 text-xs font-medium mr-1 px-2 py-0.5 rounded inline-flex items-center">
                            <Star size={12} className="mr-1" /> VIP
                          </span>
                        )}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Mail size={14} className="text-gray-400 mr-2" />
                        <span className="text-gray-800">{customer.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={14} className="text-gray-400 mr-2" />
                        <span className="text-gray-800">{customer.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={14} className="text-gray-400 mr-2 mt-1" />
                        <span className="text-gray-800">{customer.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="text-gray-400 mr-2" />
                        <span className="text-gray-800">Joined {formatDate(customer.joinedDate)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="font-semibold">₹{customer.revenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Orders</p>
                        <p className="font-semibold">{customer.orders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Loyalty Points</p>
                        <p className="font-semibold">{customer.loyaltyPoints}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Last Purchase</p>
                        <p className="font-semibold">{formatDate(customer.lastPurchase)}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                        <Eye size={16} className="mr-1" /> View Profile
                      </button>
                      <div className="flex space-x-1">
                        <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                          <Mail size={16} />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors">
                          <Phone size={16} />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredCustomers.map((customer, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                              customer.isVip ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'
                            }`}>
                              {getInitials(customer.name)}
                            </div>
                            <div className="ml-3">
                              <div className="flex items-center">
                                <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                                {customer.isVip && (
                                  <span className="ml-2 bg-purple-50 text-purple-700 text-xs px-1.5 py-0.5 rounded flex items-center">
                                    <Star size={10} className="mr-0.5" /> VIP
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-gray-500">{customer.address}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.email}</div>
                          <div className="text-sm text-gray-500">{customer.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            customer.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}>
                            {customer.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{customer.revenue.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {customer.orders}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(customer.joinedDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                              View
                            </button>
                            <button className="text-gray-500 hover:text-blue-600 transition-colors">
                              <Mail size={16} />
                            </button>
                            <button className="text-gray-500 hover:text-green-600 transition-colors">
                              <Phone size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-5 flex justify-between items-center border-t pt-4">
              <p className="text-sm text-gray-500">Showing <span className="font-medium">{filteredCustomers.length}</span> of <span className="font-medium">{customers.length}</span> customers</p>
              <div className="flex items-center">
                <button className="px-3 py-1 border rounded-l-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                  Previous
                </button>
                <button className="px-3 py-1 border-t border-b bg-blue-50 text-blue-600 font-medium">
                  1
                </button>
                <button className="px-3 py-1 border rounded-r-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed State */}
        {!showList && (
          <div className="flex items-center justify-center py-10 text-center text-gray-500">
            <div>
              <User2 size={48} className="mx-auto opacity-25 mb-3" />
              <p className="text-lg">Click "Show Customers" to view your customer list</p>
              <p className="text-sm mt-1">You have {customers.length} customers in your database</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;