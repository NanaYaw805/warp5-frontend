'use client';

import { usePathname, useRouter } from 'next/navigation';

const links = [
  { href: '/renter/dashboard', icon: 'ri-donut-chart-fill', label: 'Overview' },
  { href: '/renter/reservations', icon: 'ri-book-open-line', label: 'My Reservation' },
  { href: '/renter/payment', icon: 'ri-bank-card-line', label: 'Payment' },
  { href: '/renter/notifications', icon: 'ri-notification-2-line', label: 'Notification' },
];

const SidebarMenu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className='hidden lg:flex fixed left-0 top-0 h-full min-h-screen w-64 xl:w-72 flex-col bg-white shadow-lg border-r border-gray-100 px-4 xl:px-6 z-40'>
      <nav className='mt-24 flex flex-col space-y-4 xl:space-y-5'>
        {links.map(({ href, icon, label }) => (
          <button
            type='button'
            key={href}
            className={`flex space-x-3 xl:space-x-4 items-center h-12 xl:h-14 ${pathname === href
                ? 'bg-[#43A047] text-white hover:bg-[#388E3C] shadow-md'
                : 'bg-white text-[#1C1D21] hover:bg-gray-50 hover:border-[#43A047] border border-gray-100'
              } px-4 xl:px-5 rounded-lg cursor-pointer transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
            onClick={() => router.push(href)}
          >
            <i className={`${icon} text-lg xl:text-xl`}></i>
            <span className='font-medium text-sm xl:text-base'>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarMenu;
