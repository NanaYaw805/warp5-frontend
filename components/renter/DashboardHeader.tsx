'use client';

import React from 'react';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <section className='mt-8 flex justify-between items-center shrink-0'>
      <h1 className='text-[#000000] font-bold text-base md:text-lg lg:text-xl'>{title}</h1>
      <h2 className='text-[#000000] font-medium text-xs md:text-sm lg:text-base'>Welcome, Kwame</h2>
    </section>
  );
};

export default DashboardHeader;
