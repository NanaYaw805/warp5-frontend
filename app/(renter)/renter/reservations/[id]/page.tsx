'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader';
import Car1Image from '../../../../../public/cars/car1.jpg';

function Page() {
  const router = useRouter();

  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Reservation Details' />

        <section className='mt-6 md:mt-8 lg:mt-10 flex flex-wrap gap-3 md:gap-4 justify-between items-center'>
          <button
            onClick={() => router.back()}
            className='flex items-center justify-center border-2 border-gray-300 hover:border-gray-400 rounded-lg px-4 md:px-5 py-2 md:py-2.5 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300'
          >
            <i className="ri-arrow-left-s-line text-lg md:text-xl"></i>
            <h1 className='text-[#333333] font-medium text-sm md:text-base ml-2'>Back</h1>
          </button>
          <button className='bg-[#DC2626] hover:bg-[#B91C1C] flex justify-center items-center px-5 md:px-6 py-2 md:py-2.5 rounded-lg shadow-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>
            <i className="ri-close-circle-line text-white text-base md:text-lg mr-2"></i>
            <h2 className='font-medium text-sm md:text-base text-white'>Cancel Reservation</h2>
          </button>
        </section>

        <section className='mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
          <div>
            <div className='bg-white p-5 md:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6'>
              <div className='bg-gray-100 w-full h-48 sm:w-52 sm:h-40 lg:w-72 lg:h-56 xl:w-80 xl:h-60 relative overflow-hidden rounded-xl flex-shrink-0 shadow-sm'>
                <Image
                  src={Car1Image}
                  alt='Car image'
                  fill
                  className='object-cover'
                />
              </div>

              <div className='space-y-4 md:space-y-5 lg:space-y-6 w-full'>
                <div className='flex justify-between items-start'>
                  <h2 className='text-[#43A047] text-lg md:text-xl lg:text-2xl font-bold'>Excavators</h2>
                </div>

                <div className='flex flex-col gap-3 md:gap-4'>
                  <div className='flex items-center gap-2 md:gap-3'>
                    <i className="ri-calendar-line text-[#43A047] text-lg md:text-xl"></i>
                    <span className='text-xs md:text-sm text-[#666666] font-medium'>Date:</span>
                    <span className='text-xs md:text-sm text-[#333333] font-semibold'>Nov 1 - 30, 2025</span>
                  </div>
                  <div className='flex items-center gap-2 md:gap-3'>
                    <i className="ri-map-pin-line text-[#43A047] text-lg md:text-xl"></i>
                    <span className='text-xs md:text-sm text-[#666666] font-medium'>Location:</span>
                    <span className='text-xs md:text-sm text-[#333333] font-semibold'>Kumasi</span>
                  </div>
                </div>
                <div className='inline-flex items-center bg-[#43A047] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold shadow-sm'>
                  <i className="ri-check-line text-base md:text-lg mr-1.5"></i>
                  Confirmed
                </div>
              </div>
            </div>

            <div className='mt-6 md:mt-8 space-y-4 md:space-y-5 lg:space-y-6 bg-white p-5 md:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100'>
              <h1 className='text-[#333333] text-base md:text-lg lg:text-xl font-semibold'>Description</h1>
              <p className='text-xs md:text-sm lg:text-base text-gray-600 font-normal leading-relaxed'>
                Any other relevant details. sit amet, consectetur adipiscing elit. Nullam turpis et, interdu
                Nullam turpis et, interdum leo. Nunc hendrerit volutpat risus sit amet ornare. Vestibulum
                sollicitudin lectus eu purus varius molestie vel at velit
              </p>

              <button className='flex items-center text-[#43A047] hover:text-[#388E3C] font-medium text-sm md:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 rounded px-2 py-1'>
                <i className="ri-arrow-down-s-line text-lg md:text-xl mr-1"></i>
                Show more
              </button>
            </div>
          </div>

          <div className='space-y-6 md:space-y-8'>
            <div className='bg-white p-5 md:p-6 lg:p-7 rounded-xl shadow-sm border border-gray-100'>
              <h3 className='text-base md:text-lg lg:text-xl font-semibold text-[#333333] mb-5 md:mb-6'>Reservation Info</h3>
              <div className='space-y-3 md:space-y-4 text-sm'>
                <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
                  <span className='text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Reservation ID</span>
                  <span className='font-semibold text-gray-900 text-xs md:text-sm lg:text-base'>R-EX23</span>
                </div>
                <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
                  <span className='text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Vendor</span>
                  <span className='font-semibold text-gray-900 text-right text-xs md:text-sm lg:text-base'>John Heavy Machine Rental</span>
                </div>
                <div className='flex justify-between items-center py-3 border-b border-gray-100 last:border-0'>
                  <span className='text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Location</span>
                  <span className='font-semibold text-gray-900 text-xs md:text-sm lg:text-base'>Kumasi</span>
                </div>
              </div>
              <div className='mt-5 md:mt-6 flex justify-between items-center gap-3 pt-5 md:pt-6 border-t border-gray-100'>
                <button className='flex-1 flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-3 text-[#43A047] bg-green-50 hover:bg-green-100 rounded-lg text-xs md:text-sm lg:text-base font-medium transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50'>
                  <i className='ri-chat-3-line text-base md:text-lg'></i>
                  <span>Chat</span>
                </button>

                <button className='flex-1 flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-3 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-xs md:text-sm lg:text-base font-medium transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>
                  <i className='ri-flag-line text-base md:text-lg'></i>
                  <span>Report</span>
                </button>
              </div>
            </div>

            <div className='bg-white p-5 md:p-6 lg:p-7 rounded-xl shadow-sm border border-gray-100'>
              <h3 className='text-base md:text-lg lg:text-xl font-semibold text-[#333333] mb-5 md:mb-6'>Payment Details</h3>
              <div className='space-y-3 md:space-y-4 text-sm'>
                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                  <span className='text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Total Cost</span>
                  <span className='font-bold text-[#43A047] text-sm md:text-base lg:text-lg'>GHC 30,000</span>
                </div>
                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                  <span className='text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Status</span>
                  <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-sm'>Paid</span>
                </div>
                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                  <span className='text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Invoice</span>
                  <span className='font-semibold text-gray-900 text-xs md:text-sm lg:text-base'>INV-12345</span>
                </div>
                <div className='flex justify-between items-center py-3'>
                  <span className='text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Method</span>
                  <div className='flex items-center gap-2'>
                    <i className="ri-bank-card-line text-gray-400 text-base md:text-lg"></i>
                    <span className='font-semibold text-gray-900 text-xs md:text-sm lg:text-base'>Card</span>
                  </div>
                </div>
              </div>

              <div className='mt-5 md:mt-6 pt-5 md:pt-6 border-t border-gray-100'>
                <button className='w-full flex items-center justify-center gap-2 px-4 py-3 md:py-3.5 text-white bg-[#43A047] hover:bg-[#388E3C] rounded-lg text-sm md:text-base font-semibold shadow-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-offset-2'>
                  <i className='ri-download-2-line text-lg md:text-xl'></i>
                  <span>Download Invoice</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
