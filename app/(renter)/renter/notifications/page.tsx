'use client';

import React, { useState } from 'react';
import DashboardHeader from '@/components/renter/DashboardHeader';

function Page() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'archived'>('all');
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Reservation Confirmed',
      message: 'Your booking for Electric Rope Shovel (R-EX23) has been confirmed by the vendor.',
      time: '2 hours ago',
      unread: true,
      icon: 'ri-checkbox-circle-fill'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Payment Due Soon',
      message: 'Invoice #INV-2992 for "Bulldozer D8T" is due in 3 days. Please make a payment to avoid service interruption.',
      time: '5 hours ago',
      unread: true,
      icon: 'ri-alarm-warning-fill'
    },
    {
      id: 3,
      type: 'info',
      title: 'New Message',
      message: 'Vendor "Mega Earth Movers" sent you a message: "The equipment is ready for pickup..."',
      time: '1 day ago',
      unread: false,
      icon: 'ri-message-3-fill'
    },
    {
      id: 4,
      type: 'system',
      title: 'System Maintenance',
      message: 'Warp5 Platform will undergo scheduled maintenance on Nov 25th from 2:00 AM to 4:00 AM.',
      time: '2 days ago',
      unread: false,
      icon: 'ri-settings-3-fill'
    },
    {
      id: 5,
      type: 'success',
      title: 'Payment Successful',
      message: 'We received your payment of GHC 12,000 for transaction TRX-9923.',
      time: '3 days ago',
      unread: false,
      icon: 'ri-secure-payment-fill'
    },
    {
      id: 6,
      type: 'alert',
      title: 'Rental Ending Soon',
      message: 'Your rental period for "Mobile Crane 50T" ends tomorrow. Please prepare for return or extend usage.',
      time: '4 days ago',
      unread: false,
      icon: 'ri-time-fill'
    },
    {
      id: 7,
      type: 'info',
      title: 'Profile Updated',
      message: 'Your contact information was successfully updated.',
      time: '1 week ago',
      unread: false,
      icon: 'ri-user-settings-fill'
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'alert': return 'text-orange-600 bg-orange-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      case 'system': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return n.unread;
    if (filter === 'archived') return false; // Mock archive
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredNotifications.length / itemsPerPage));
  const displayedNotifications = filteredNotifications.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  return (
    <div className='flex flex-col h-full space-y-8 pb-10'>
      <DashboardHeader title='Notifications' />

      {/* Controls */}
      <section className='flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4'>

        {/* Filter Tabs */}
        <div className='bg-white p-1 rounded-xl border border-gray-100 flex gap-1 shadow-sm'>
          {['all', 'unread', 'archived'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setFilter(tab as any); setActivePage(1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${filter === tab
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className='text-sm text-green-600 font-medium hover:text-green-700 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors'>
          <i className="ri-check-double-line"></i> Mark all as read
        </button>

      </section>

      {/* Notification List */}
      <section className='space-y-4'>
        {displayedNotifications.length > 0 ? (
          displayedNotifications.map((note) => (
            <div
              key={note.id}
              className={`relative group p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${note.unread
                  ? 'bg-white border-green-200 shadow-sm'
                  : 'bg-gray-50/50 border-gray-100 opacity-80 hover:opacity-100'
                }`}
            >
              <div className="flex gap-4 items-start">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-xl ${getIconColor(note.type)}`}>
                  <i className={note.icon}></i>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className={`text-base ${note.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {note.title}
                      {note.unread && <span className="inline-block w-2 h-2 rounded-full bg-red-500 ml-2 mb-0.5"></span>}
                    </h4>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{note.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pr-8">{note.message}</p>
                </div>

                {/* Hover Action */}
                <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl text-gray-300 mb-4">
              <i className="ri-notification-off-line"></i>
            </div>
            <h3 className="text-gray-900 font-bold text-lg">No notifications</h3>
            <p className="text-gray-500 text-sm">You're all caught up! Check back later.</p>
          </div>
        )}
      </section>

      {/* Pagination */}
      {displayedNotifications.length > 0 && (
        <div className="flex justify-center pt-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActivePage(p => Math.max(1, p - 1))}
              disabled={activePage === 1}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePage(i + 1)}
                  className={`w-10 h-10 rounded-xl font-medium text-sm transition-colors ${activePage === i + 1 ? 'bg-green-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setActivePage(p => Math.min(totalPages, p + 1))}
              disabled={activePage === totalPages}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Page;
