'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader';
import DashboardAlert from '@/components/renter/DashboardAlert';

function Page() {
  const router = useRouter();

  // Mock Data for Dashboard
  const stats = [
    { label: 'Total Rentals', value: '24', icon: 'ri-stack-line', color: 'bg-blue-50 text-blue-600' },
    { label: 'Active Goals', value: '3', icon: 'ri-loader-4-line', color: 'bg-green-50 text-green-600' },
    { label: 'Pending Requests', value: '1', icon: 'ri-time-line', color: 'bg-orange-50 text-orange-600' },
    { label: 'Total Spent', value: 'GHC 45k', icon: 'ri-wallet-3-line', color: 'bg-purple-50 text-purple-600' },
  ];

  const recentActivity = [
    { id: 'ORD-2921', item: 'CAT Excavator 320', status: 'Active', date: 'Nov 12 - Nov 18', amount: 'GHC 8,400' },
    { id: 'ORD-2920', item: 'JCB Backhoe Loader', status: 'Pending', date: 'Nov 20 - Nov 22', amount: 'GHC 2,200' },
    { id: 'ORD-2918', item: 'Bulldozer D6K', status: 'Completed', date: 'Oct 01 - Oct 05', amount: 'GHC 5,500' },
    { id: 'ORD-2915', item: 'Mobile Crane 50T', status: 'Completed', date: 'Sep 15 - Sep 16', amount: 'GHC 3,000' },
    { id: 'ORD-2911', item: 'Dump Truck 8x4', status: 'Cancelled', date: 'Sep 10', amount: 'GHC 0' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-orange-100 text-orange-700';
      case 'Completed': return 'bg-gray-100 text-gray-700';
      case 'Cancelled': return 'bg-red-50 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-10">
      <DashboardHeader title="Dashboard Overview" />

      {/* Alert Section */}
      <DashboardAlert />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${stat.color}`}>
              <i className={stat.icon}></i>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column (Content) */}
        <div className="lg:col-span-2 space-y-8">

          {/* Spending Chart (CSS Placeholder) */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-gray-900">Rental Activity</h3>
              <select className="bg-gray-50 border-none text-sm text-gray-600 rounded-lg px-3 py-1 cursor-pointer hover:bg-gray-100 outline-none">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>

            {/* Simple CSS Bar Chart */}
            <div className="h-48 flex items-end justify-between gap-2 md:gap-4 px-2">
              {[40, 65, 35, 85, 55, 70].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                  <div className="relative w-full bg-gray-100 rounded-t-lg overflow-hidden h-full flex items-end">
                    <div
                      style={{ height: `${h}%` }}
                      className="w-full bg-green-500/80 group-hover:bg-green-500 transition-all duration-500 rounded-t-sm"
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium group-hover:text-green-600">
                    {['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Recent Reservations</h3>
              <button className="text-sm text-green-600 font-medium hover:text-green-700">View All</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/50 text-xs text-gray-400 uppercase tracking-wider text-left font-semibold">
                  <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Equipment</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentActivity.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">#{order.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                            <i className="ri-roadster-line"></i>
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{order.item}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-green-600 hover:border-green-200 flex items-center justify-center transition-all">
                          <i className="ri-more-2-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar Widgets) */}
        <div className="space-y-8">



          {/* Upcoming Schedule */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center justify-between">
              Upcoming
              <i className="ri-calendar-event-line text-gray-400"></i>
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Excavator Return', date: 'Tomorrow, 9:00 AM', type: 'bg-orange-100 text-orange-600 icon-arrow-right-up-line' },
                { title: 'Crane Delivery', date: 'Nov 22, 2025', type: 'bg-green-100 text-green-600 icon-arrow-left-down-line' },
                { title: 'Invoice Due', date: 'Nov 25, 2025', type: 'bg-blue-100 text-blue-600 icon-file-list-line' }
              ].map((event, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center ${event.type.split(' ')[0]} ${event.type.split(' ')[1]}`}>
                    <i className={`ri-${event.type.split('icon-')[1]}`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{event.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              View Calendar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Page;
