'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/renter/DashboardHeader';

function Page() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Reservation Successful',
      message: 'Equipment Excavator with Reservation ID R-EX45 has been confirmed.',
      date: '17th Nov 2025',
      time: '2:30 PM',
      read: false,
      icon: 'ri-check-line'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Payment Reminder',
      message: 'Your payment for Bulldozer (R-LD11) is due in 2 days.',
      date: '16th Nov 2025',
      time: '10:15 AM',
      read: false,
      icon: 'ri-alarm-warning-line'
    },
    {
      id: 3,
      type: 'info',
      title: 'Rental Period Ending',
      message: 'Your rental for Crane (R-CR09) ends tomorrow, Nov 18, 2025.',
      date: '15th Nov 2025',
      time: '4:45 PM',
      read: true,
      icon: 'ri-information-line'
    },
    {
      id: 4,
      type: 'error',
      title: 'Payment Failed',
      message: 'Payment for Dump Truck (R-DM54) could not be processed. Please update your payment method.',
      date: '14th Nov 2025',
      time: '11:20 AM',
      read: true,
      icon: 'ri-close-circle-line'
    },
    {
      id: 5,
      type: 'success',
      title: 'Equipment Delivered',
      message: 'Loader (R-RL72) has been successfully delivered to your location.',
      date: '13th Nov 2025',
      time: '9:00 AM',
      read: true,
      icon: 'ri-truck-line'
    },
    {
      id: 6,
      type: 'info',
      title: 'New Message from Vendor',
      message: 'SkyLift Rentals sent you a message regarding your Crane rental.',
      date: '12th Nov 2025',
      time: '3:30 PM',
      read: false,
      icon: 'ri-message-3-line'
    },
    {
      id: 7,
      type: 'success',
      title: 'Refund Processed',
      message: 'Your refund of GHC 5,000 for cancelled reservation R-CP22 has been processed.',
      date: '11th Nov 2025',
      time: '1:15 PM',
      read: true,
      icon: 'ri-refund-2-line'
    },
    {
      id: 8,
      type: 'warning',
      title: 'Maintenance Scheduled',
      message: 'Maintenance scheduled for your rented Backhoe on Nov 20, 2025.',
      date: '10th Nov 2025',
      time: '8:45 AM',
      read: true,
      icon: 'ri-tools-line'
    },
    {
      id: 9,
      type: 'info',
      title: 'Review Request',
      message: 'Please rate your experience with Mega Earth Movers for your recent rental.',
      date: '9th Nov 2025',
      time: '5:20 PM',
      read: true,
      icon: 'ri-star-line'
    },
    {
      id: 10,
      type: 'success',
      title: 'Invoice Available',
      message: 'Invoice INV-12345 for your Excavator rental is now available for download.',
      date: '8th Nov 2025',
      time: '12:00 PM',
      read: true,
      icon: 'ri-file-text-line'
    },
    {
      id: 11,
      type: 'warning',
      title: 'Inspection Due',
      message: 'Routine inspection required for Grader (R-EX29) within 48 hours.',
      date: '7th Nov 2025',
      time: '10:30 AM',
      read: true,
      icon: 'ri-search-eye-line'
    },
    {
      id: 12,
      type: 'info',
      title: 'Weather Alert',
      message: 'Heavy rain expected. Consider rescheduling outdoor equipment usage.',
      date: '6th Nov 2025',
      time: '7:15 AM',
      read: true,
      icon: 'ri-cloud-line'
    }
  ];

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'success': return { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-100' };
      case 'warning': return { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-100' };
      case 'error': return { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-100' };
      case 'info': return { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-100' };
      default: return { bg: 'bg-gray-50', icon: 'text-gray-600', border: 'border-gray-100' };
    }
  };

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(notifications.length / pageSize));
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedNotifications = notifications.slice(startIndex, startIndex + pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Notifications' />

        <section className='flex justify-between items-center mt-6 md:mt-8 lg:mt-10'>
          <div className='flex gap-2 md:gap-3 bg-white rounded-xl p-2 shadow-sm border border-gray-100'>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${filter === 'all'
                  ? 'bg-[#43A047] text-white shadow-sm'
                  : 'text-[#666666] hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${filter === 'unread'
                  ? 'bg-[#43A047] text-white shadow-sm'
                  : 'text-[#666666] hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${filter === 'read'
                  ? 'bg-[#43A047] text-white shadow-sm'
                  : 'text-[#666666] hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            >
              Read
            </button>
          </div>

          <button className='text-[#43A047] hover:text-[#388E3C] font-medium text-xs md:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 rounded px-3 py-2'>
            Mark all as read
          </button>
        </section>

        <section className='mt-6 md:mt-8 space-y-3 md:space-y-4'>
          {paginatedNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-xl shadow-sm border ${notification.read ? 'border-gray-100' : 'border-[#43A047] border-l-4'
                } p-4 md:p-5 lg:p-6 hover:shadow-md transition-all cursor-pointer`}
            >
              <div className='flex items-start gap-3 md:gap-4'>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${getNotificationStyle(notification.type).bg} border ${getNotificationStyle(notification.type).border} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${notification.icon} ${getNotificationStyle(notification.type).icon} text-xl md:text-2xl`}></i>
                </div>

                <div className='flex-1 min-w-0'>
                  <div className='flex justify-between items-start gap-3 mb-2'>
                    <h1 className={`${notification.read ? 'font-medium' : 'font-semibold'} text-sm md:text-base lg:text-lg text-[#333333]`}>
                      {notification.title}
                    </h1>
                    {!notification.read && (
                      <span className='w-2 h-2 md:w-2.5 md:h-2.5 bg-[#43A047] rounded-full flex-shrink-0 mt-1.5'></span>
                    )}
                  </div>
                  <p className='text-[#666666] font-regular text-xs md:text-sm mb-3'>{notification.message}</p>
                  <div className='flex items-center gap-4 text-[#999999] text-xs md:text-sm'>
                    <span className='flex items-center gap-1'>
                      <i className='ri-calendar-line'></i>
                      {notification.date}
                    </span>
                    <span className='flex items-center gap-1'>
                      <i className='ri-time-line'></i>
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className='flex items-center justify-between mt-6 md:mt-8 shrink-0'>
          <p className='text-[#666666] text-xs md:text-sm'>
            Showing {startIndex + 1}-{Math.min(startIndex + pageSize, notifications.length)} of {notifications.length}
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
      </main>
    </>
  )
}

export default Page
