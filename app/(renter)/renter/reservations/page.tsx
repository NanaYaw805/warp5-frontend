'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader'

function Page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed' | 'cancelled'>('all');

  const reservationHistory = [
    { id: 'R-EX45', equipment: 'Bulldozer', vendor: 'Mega Earth Movers', dates: 'Nov 01 - 06, 2025', cost: 'GHC 8,450' },
    { id: 'R-LD11', equipment: 'Loader', vendor: 'Prime Equip Leasing', dates: 'Oct 23 - 28, 2025', cost: 'GHC 6,880' },
    { id: 'R-CR09', equipment: 'Crane', vendor: 'SkyLift Rentals', dates: 'Oct 10 - 14, 2025', cost: 'GHC 12,300' },
    { id: 'R-DM54', equipment: 'Dump Truck', vendor: 'HaulPro Logistics', dates: 'Aug 05 - 12, 2025', cost: 'GHC 9,100' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-RL72', equipment: 'Roller', vendor: 'SmoothRoad Co.', dates: 'Jul 25 - 30, 2025', cost: 'GHC 5,420' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-LF08', equipment: 'Lift Boom', vendor: 'ElevateWorks', dates: 'Jun 28 - Jul 03, 2025', cost: 'GHC 7,675' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },

    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },

  ];

  const pageSize = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(reservationHistory.length / pageSize));
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedReservations = reservationHistory.slice(startIndex, startIndex + pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };


  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='My Reservations' />

        <section className='mt-6 md:mt-8 lg:mt-10'>
          <div className='flex flex-wrap gap-2 md:gap-3 bg-white rounded-xl p-2 shadow-sm border border-gray-100 w-fit'>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${activeTab === 'all'
                  ? 'bg-[#43A047] text-white shadow-sm'
                  : 'text-[#666666] hover:bg-gray-100 hover:text-[#333333]'
                } focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            >
              All Reservations
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${activeTab === 'active'
                  ? 'bg-[#43A047] text-white shadow-sm'
                  : 'text-[#666666] hover:bg-gray-100 hover:text-[#333333]'
                } focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${activeTab === 'completed'
                  ? 'bg-[#43A047] text-white shadow-sm'
                  : 'text-[#666666] hover:bg-gray-100 hover:text-[#333333]'
                } focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab('cancelled')}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${activeTab === 'cancelled'
                  ? 'bg-[#43A047] text-white shadow-sm'
                  : 'text-[#666666] hover:bg-gray-100 hover:text-[#333333]'
                } focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            >
              Cancelled
            </button>
          </div>
        </section>

        <section className='mt-6 md:mt-8 lg:mt-10 flex flex-col'>

          <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 lg:p-8'>
            <div className='flex justify-between items-center mb-6 md:mb-7 lg:mb-8'>
              <h1 className='text-[#000000] font-semibold text-base md:text-lg lg:text-xl'>Reservation History</h1>
              <span className='text-[#666666] text-xs md:text-sm'>{reservationHistory.length} total</span>
            </div>
            <div className='overflow-x-auto'>
              <div className='grid grid-cols-[1fr_1.2fr_1.2fr_1fr_0.8fr_auto] items-center min-w-[700px] pb-3 border-b border-gray-200'>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>ID</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Equipment</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Vendor</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Dates</h1>
                <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Cost</h1>
                <span />
              </div>
            </div>

            <div className='mt-2 space-y-0'>
              {paginatedReservations.map((reservation, index) => (
                <div key={`${reservation.id}-${index}`} className='overflow-x-auto border-b border-gray-100 last:border-b-0'>
                  <button
                    onClick={() => router.push('/renter/reservations/id')}
                    className='grid grid-cols-[1fr_1.2fr_1.2fr_1fr_0.8fr_auto] items-center h-14 md:h-16 lg:h-16 min-w-[700px] w-full text-left hover:bg-gray-50 transition-colors px-0 focus:outline-none focus:bg-gray-50'
                  >
                    <h1 className='text-[#1C1D21] font-medium text-xs md:text-sm lg:text-sm'>{reservation.id}</h1>
                    <h1 className='text-[#1C1D21] font-regular text-xs md:text-sm lg:text-sm'>{reservation.equipment}</h1>
                    <h1 className='text-[#666666] font-regular text-xs md:text-sm lg:text-sm truncate pr-2'>{reservation.vendor}</h1>
                    <h1 className='text-[#666666] font-regular text-xs md:text-sm lg:text-sm'>{reservation.dates}</h1>
                    <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-sm'>{reservation.cost}</h1>
                    <i className="ri-arrow-right-line text-[#43A047] text-base md:text-lg lg:text-xl"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-between mt-6 shrink-0'>
            <p className='text-[#666666] text-xs md:text-sm'>
              Showing {startIndex + 1}-{Math.min(startIndex + pageSize, reservationHistory.length)} of {reservationHistory.length}
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
