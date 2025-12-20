'use client';

import React, { useState } from 'react';
import DashboardHeader from '@/components/renter/DashboardHeader';

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const paymentHistory = [
    { id: 'TRX-9921', equipment: 'Electric Rope Shovel 4100XPC', date: 'Nov 15, 2025', amount: 'GHC 10,000', status: 'Paid', method: 'Card ending 4242' },
    { id: 'TRX-9922', equipment: 'Bulldozer D8T', date: 'Nov 12, 2025', amount: 'GHC 15,000', status: 'Failed', method: 'Momo' },
    { id: 'TRX-9923', equipment: 'Excavator 320 GC', date: 'Nov 10, 2025', amount: 'GHC 12,000', status: 'Pending', method: 'Bank Transfer' },
    { id: 'TRX-9924', equipment: 'Mobile Crane 50T', date: 'Oct 28, 2025', amount: 'GHC 20,000', status: 'Paid', method: 'Card ending 8812' },
    { id: 'TRX-9925', equipment: 'Dump Truck 8x4', date: 'Oct 15, 2025', amount: 'GHC 8,000', status: 'Failed', method: 'Momo' },
    { id: 'TRX-9926', equipment: 'Wheel Loader 950', date: 'Sep 30, 2025', amount: 'GHC 9,000', status: 'Paid', method: 'Card ending 1234' },
    { id: 'TRX-9927', equipment: 'Motor Grader 140K', date: 'Sep 15, 2025', amount: 'GHC 11,000', status: 'Paid', method: 'Momo' },
    { id: 'TRX-9928', equipment: 'Vibratory Roller', date: 'Sep 01, 2025', amount: 'GHC 7,000', status: 'Refunded', method: 'Card ending 4242' },
    { id: 'TRX-9929', equipment: 'Backhoe Loader', date: 'Aug 20, 2025', amount: 'GHC 13,000', status: 'Paid', method: 'Bank Transfer' },
    { id: 'TRX-9930', equipment: 'Trencher T555', date: 'Aug 10, 2025', amount: 'GHC 6,000', status: 'Paid', method: 'Card ending 9999' }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700 border border-green-200';
      case 'Failed': return 'bg-red-50 text-red-700 border border-red-100';
      case 'Pending': return 'bg-orange-100 text-orange-700 border border-orange-200';
      case 'Refunded': return 'bg-purple-100 text-purple-700 border border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  const totalPages = Math.max(1, Math.ceil(paymentHistory.length / pageSize));
  const paginatedData = paymentHistory.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='flex flex-col h-full space-y-8 pb-10'>
      <DashboardHeader title='Payment History' />

      {/* Financial Overview Cards */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-500 font-medium mb-1'>Total Paid</p>
            <h3 className='text-2xl font-bold text-gray-900'>GHC 145.4k</h3>
          </div>
          <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 text-xl border border-green-100'>
            <i className='ri-checkbox-circle-line'></i>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-500 font-medium mb-1'>Outstanding</p>
            <h3 className='text-2xl font-bold text-gray-900'>GHC 12.0k</h3>
          </div>
          <div className='w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 text-xl border border-orange-100'>
            <i className='ri-time-line'></i>
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between'>
          <div>
            <p className='text-sm text-gray-500 font-medium mb-1'>Refunded</p>
            <h3 className='text-2xl font-bold text-gray-900'>GHC 7.0k</h3>
          </div>
          <div className='w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 text-xl border border-purple-100'>
            <i className='ri-arrow-go-back-line'></i>
          </div>
        </div>
      </section>

      {/* Payment Table */}
      <section className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="font-bold text-lg text-gray-900">Recent Transactions</h3>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors">
            <i className="ri-download-cloud-2-line"></i> Export CSV
          </button>
        </div>

        <div className='overflow-x-auto'>
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Equipment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Method</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paginatedData.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">{payment.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.equipment}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{payment.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <i className={`text-base ${payment.method.includes('Card') ? 'ri-bank-card-line' : payment.method.includes('Momo') ? 'ri-smartphone-line' : 'ri-bank-line'}`}></i>
                      {payment.method}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 font-mono">{payment.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button title="Download Invoice" className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-green-50 text-gray-400 hover:text-green-600 flex items-center justify-center transition-colors">
                        <i className="ri-file-download-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
          <span className="text-sm text-gray-500">
            Page <span className="font-bold text-gray-900">{currentPage}</span> of {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
