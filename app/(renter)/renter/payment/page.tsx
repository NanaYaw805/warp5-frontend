'use client'

import React, { useState } from 'react'
import DashboardHeader from '@/components/renter/DashboardHeader'

function Page() {
  const tableHeaders = ['Payment ID', 'Equipment', 'Date', 'Amount', 'Status', ''];

  const paymentHistory = [
    {
      id: 'R-EX23',
      equipment: 'Electric Rope Shovel',
      date: 'Nov 1-15, 2025',
      amount: 'GHC 10,000',
      status: 'Paid'
    },
    {
      id: 'R-EX24',
      equipment: 'Bulldozer',
      date: 'Nov 16-30, 2025',
      amount: 'GHC 15,000',
      status: 'Failed'
    },
    {
      id: 'R-EX25',
      equipment: 'Excavator',
      date: 'Dec 1-15, 2025',
      amount: 'GHC 12,000',
      status: 'Pending'
    },
    {
      id: 'R-EX26',
      equipment: 'Crane',
      date: 'Dec 16-31, 2025',
      amount: 'GHC 20,000',
      status: 'Paid'
    },
    {
      id: 'R-EX27',
      equipment: 'Dump Truck',
      date: 'Jan 1-15, 2026',
      amount: 'GHC 8,000',
      status: 'Failed'
    },
    {
      id: 'R-EX28',
      equipment: 'Loader',
      date: 'Jan 16-31, 2026',
      amount: 'GHC 9,000',
      status: 'Pending'
    },
    {
      id: 'R-EX29',
      equipment: 'Grader',
      date: 'Feb 1-15, 2026',
      amount: 'GHC 11,000',
      status: 'Paid'
    },
    {
      id: 'R-EX30',
      equipment: 'Roller',
      date: 'Feb 16-28, 2026',
      amount: 'GHC 7,000',
      status: 'Failed'
    },
    {
      id: 'R-EX31',
      equipment: 'Backhoe',
      date: 'Mar 1-15, 2026',
      amount: 'GHC 13,000',
      status: 'Pending'
    },
    {
      id: 'R-EX32',
      equipment: 'Trencher',
      date: 'Mar 16-31, 2026',
      amount: 'GHC 6,000',
      status: 'Paid'
    }
  ]

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Paid': return { text: 'text-green-700', bg: 'bg-green-100', icon: 'ri-check-line' };
      case 'Failed': return { text: 'text-red-700', bg: 'bg-red-100', icon: 'ri-close-line' };
      case 'Pending': return { text: 'text-yellow-700', bg: 'bg-yellow-100', icon: 'ri-time-line' };
      default: return { text: 'text-gray-700', bg: 'bg-gray-100', icon: 'ri-information-line' };
    }
  };


  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(paymentHistory.length / pageSize));
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPayments = paymentHistory.slice(startIndex, startIndex + pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };


  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Payment' />

        <section className='mt-6 md:mt-8 lg:mt-10 w-full'>
          <div className='bg-white rounded-xl shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100'>
            {/* Card 1 - Total Paid */}
            <div className='flex flex-col p-5 md:p-6 lg:p-7'>
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-2'>
                    <div className='w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green-100 flex items-center justify-center'>
                      <i className='ri-money-dollar-circle-line text-green-600 text-xl md:text-2xl'></i>
                    </div>
                  </div>
                  <h2 className='text-[#666666] font-medium text-xs md:text-sm mb-1'>Total Paid</h2>
                  <p className='text-[#333333] font-bold text-xl md:text-2xl lg:text-3xl'>GHC 100,000</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Outstanding */}
            <div className='flex flex-col p-5 md:p-6 lg:p-7'>
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-2'>
                    <div className='w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-100 flex items-center justify-center'>
                      <i className='ri-error-warning-line text-orange-600 text-xl md:text-2xl'></i>
                    </div>
                  </div>
                  <h2 className='text-[#666666] font-medium text-xs md:text-sm mb-1'>Outstanding</h2>
                  <p className='text-[#333333] font-bold text-xl md:text-2xl lg:text-3xl'>GHC 200,400</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Refunded */}
            <div className='flex flex-col p-5 md:p-6 lg:p-7'>
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-2'>
                    <div className='w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 flex items-center justify-center'>
                      <i className='ri-refund-2-line text-blue-600 text-xl md:text-2xl'></i>
                    </div>
                  </div>
                  <h2 className='text-[#666666] font-medium text-xs md:text-sm mb-1'>Refunded</h2>
                  <p className='text-[#333333] font-bold text-xl md:text-2xl lg:text-3xl'>GHC 100,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-8 md:mt-10 lg:mt-12 flex-1'>
          <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 lg:p-8'>
            <div className='flex justify-between items-center mb-6 md:mb-7 lg:mb-8'>
              <h1 className='text-[#333333] font-semibold text-base md:text-lg lg:text-xl'>Payment History</h1>
              <span className='text-[#666666] text-xs md:text-sm'>{paymentHistory.length} transactions</span>
            </div>
            <div className='overflow-x-auto'>
              <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_auto] items-center min-w-[700px] pb-3 border-b border-gray-200'>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Payment ID</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Equipment</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Date</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Amount</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Status</h1>
                <span />
              </div>
            </div>

            <div className='mt-2 space-y-0'>
              {paginatedPayments.map((payment) => (
                <div key={payment.id} className='overflow-x-auto border-b border-gray-100 last:border-b-0'>
                  <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_auto] items-center h-14 md:h-16 lg:h-16 min-w-[700px] hover:bg-gray-50 transition-colors'>
                    <h1 className='text-[#1C1D21] font-medium text-xs md:text-sm lg:text-sm'>{payment.id}</h1>
                    <h1 className='text-[#1C1D21] font-regular text-xs md:text-sm lg:text-sm'>{payment.equipment}</h1>
                    <h1 className='text-[#666666] font-regular text-xs md:text-sm lg:text-sm'>{payment.date}</h1>
                    <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-sm'>{payment.amount}</h1>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs md:text-sm font-semibold ${getStatusStyle(payment.status).bg} ${getStatusStyle(payment.status).text} w-fit`}>
                      <i className={`${getStatusStyle(payment.status).icon} text-sm`}></i>
                      {payment.status}
                    </span>
                    <button className='text-[#43A047] hover:text-[#388E3C] font-medium text-xs md:text-sm lg:text-sm flex items-center gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 rounded px-2 py-1'>
                      <i className='ri-file-text-line text-base'></i>
                      Invoice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex items-center justify-between mt-6 shrink-0'>
            <p className='text-[#666666] text-xs md:text-sm'>
              Showing {startIndex + 1}-{Math.min(startIndex + pageSize, paymentHistory.length)} of {paymentHistory.length}
            </p>
            <div className='flex items-center space-x-1 md:space-x-2'>
              <button
                className='flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50'
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label='Previous page'
              >
                <i className='ri-arrow-left-s-line text-base md:text-lg text-[#1C1D21]'></i>
              </button>
              <div className='flex items-center space-x-1'>
                {pages.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-xs md:text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 ${pageNumber === currentPage
                        ? 'bg-[#43A047] text-white shadow-sm'
                        : 'text-[#666666] hover:bg-gray-100 border border-gray-200'
                      }`}
                    onClick={() => goToPage(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <button
                className='flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50'
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label='Next page'
              >
                <i className='ri-arrow-right-s-line text-base md:text-lg text-[#1C1D21]'></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
