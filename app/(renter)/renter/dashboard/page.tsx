'use client';

import { useState } from 'react';
import { DateRange } from 'react-date-range';
import type { Range, RangeKeyDict } from 'react-date-range';
import DashboardHeader from '@/components/renter/DashboardHeader';
import DashboardAlert from '@/components/renter/DashboardAlert';

function Page() {
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const handleDateRangeChange = (ranges: RangeKeyDict) => {
    setDateRange([ranges.selection]);
  };

  const reservationHistory = [
    { id: 'R-EX45', equipment: 'Bulldozer', vendor: 'Mega Earth Movers', dates: 'Nov 01 - 06, 2025', cost: 'GHC 8,450' },
    { id: 'R-LD11', equipment: 'Loader', vendor: 'Prime Equip Leasing', dates: 'Oct 23 - 28, 2025', cost: 'GHC 6,880' },
    { id: 'R-CR09', equipment: 'Crane', vendor: 'SkyLift Rentals', dates: 'Oct 10 - 14, 2025', cost: 'GHC 12,300' },
    { id: 'R-DM54', equipment: 'Dump Truck', vendor: 'HaulPro Logistics', dates: 'Aug 05 - 12, 2025', cost: 'GHC 9,100' },
    { id: 'R-RL72', equipment: 'Roller', vendor: 'SmoothRoad Co.', dates: 'Jul 25 - 30, 2025', cost: 'GHC 5,420' },
    { id: 'R-LF08', equipment: 'Lift Boom', vendor: 'ElevateWorks', dates: 'Jun 28 - Jul 03, 2025', cost: 'GHC 7,675' },
  ];

  return (
    <>
      <main className='flex flex-col h-full '>
        <DashboardHeader title='Overview' />
        <DashboardAlert />

        <section className='mt-6 md:mt-8 lg:mt-10'>
          <div className='grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10 xl:gap-12'>
            <div className='flex flex-col'>
              <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col py-6 md:py-8 px-5 md:px-6 gap-8 md:gap-10 lg:flex-row lg:justify-around lg:py-10 lg:px-6 lg:gap-0'>

                <div className='flex flex-col space-y-3 md:space-y-4'>
                  <h1 className='text-[#333333] font-semibold text-sm md:text-base lg:text-lg'>Upcoming Reservation</h1>
                  <p className='text-[#666666] font-regular text-xs md:text-sm lg:text-base'>Equipment Name: <span className='font-medium text-[#333333]'>Excavator</span></p>
                  <p className='text-[#666666] font-regular text-xs md:text-sm lg:text-base'>Nov 15 - 20, 2025</p>

                  <button className='flex w-36 md:w-40 h-10 md:h-11 justify-center items-center border-2 border-[#43A047] rounded-full text-[#43A047] hover:bg-[#43A047] hover:text-white font-medium text-xs md:text-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-offset-2'>View Details</button>
                </div>

                <div className='hidden lg:block border-l border-gray-200 h-auto' />

                <div className='flex flex-col space-y-3 md:space-y-4'>
                  <h1 className='text-[#333333] font-semibold text-sm md:text-base lg:text-lg'>Upcoming Reservation</h1>
                  <p className='text-[#666666] font-regular text-xs md:text-sm lg:text-base'>Equipment Name: <span className='font-medium text-[#333333]'>Crane</span></p>
                  <p className='text-[#666666] font-regular text-xs md:text-sm lg:text-base'>Nov 22 - 27, 2025</p>

                  <button className='flex w-36 md:w-40 h-10 md:h-11 justify-center items-center border-2 border-[#43A047] rounded-full text-[#43A047] hover:bg-[#43A047] hover:text-white font-medium text-xs md:text-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-offset-2'>View Details</button>
                </div>
              </div>

              <div className='mt-6 p-4 md:mt-8 lg:mt-10 bg-white rounded-xl shadow-sm border border-gray-100 md:p-6 lg:p-8'>
                <h1 className='text-[#000000] font-semibold text-base md:text-lg lg:text-xl'>Reservation History</h1>
                <div className='mt-6 md:mt-7 lg:mt-8 overflow-x-auto'>
                  <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center min-w-[600px] pb-3 border-b border-gray-200'>
                    <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>ID</h1>
                    <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Equipment</h1>
                    <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Vendor</h1>
                    <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Dates</h1>
                    <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-base'>Cost</h1>
                    <span />
                  </div>
                </div>

                <div className='mt-2 space-y-0 overflow-y-auto'>
                  {reservationHistory.map((reservation) => (
                    <div key={reservation.id} className='overflow-x-auto border-b border-gray-100 last:border-b-0'>
                      <button className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center h-14 md:h-16 lg:h-16 min-w-[600px] w-full text-left hover:bg-gray-50 transition-colors px-0 focus:outline-none focus:bg-gray-50'>
                        <h1 className='text-[#1C1D21] font-medium text-xs md:text-sm lg:text-sm'>{reservation.id}</h1>
                        <h1 className='text-[#1C1D21] font-regular text-xs md:text-sm lg:text-sm'>{reservation.equipment}</h1>
                        <h1 className='text-[#666666] font-regular text-xs md:text-sm lg:text-sm'>{reservation.vendor}</h1>
                        <h1 className='text-[#666666] font-regular text-xs md:text-sm lg:text-sm'>{reservation.dates}</h1>
                        <h1 className='text-[#1C1D21] font-semibold text-xs md:text-sm lg:text-sm'>{reservation.cost}</h1>
                        <i className="ri-arrow-right-line text-[#43A047] text-base md:text-lg lg:text-xl"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='w-full flex justify-center items-center bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5'>
                <DateRange
                  ranges={dateRange}
                  onChange={handleDateRangeChange}
                  months={1}
                  direction="vertical"
                  className="w-full"
                  moveRangeOnFirstSelection={false}
                />
              </div>

              <div className='mt-6 md:mt-8 lg:mt-10'>
                <h1 className='text-[#333333] font-semibold text-base md:text-lg lg:text-xl mb-4'>Updates</h1>
                <div className='flex flex-col space-y-4'>
                  <div className='flex justify-start items-start bg-[#FFF4E6] border-l-4 border-[#F59E0B] py-4 md:py-5 px-4 md:px-5 rounded-lg shadow-sm'>
                    <i className="ri-notification-3-line text-[#F59E0B] text-lg md:text-xl mr-3 mt-0.5"></i>
                    <h1 className='text-[#333333] font-medium text-xs md:text-sm lg:text-base'>Rent of excavator will end this Thursday Nov 20</h1>
                  </div>

                  <div className='flex justify-start items-start bg-[#E8F5E9] border-l-4 border-[#43A047] py-4 md:py-5 px-4 md:px-5 rounded-lg shadow-sm'>
                    <i className="ri-check-double-line text-[#43A047] text-lg md:text-xl mr-3 mt-0.5"></i>
                    <h1 className='text-[#333333] font-medium text-xs md:text-sm lg:text-base'>Payment confirmed for Crane rental</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        .rdrDateDisplayWrapper {
          display: none;
        }
      `}</style>
    </>
  )
}

export default Page
