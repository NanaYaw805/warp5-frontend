'use client';

import React from 'react'

function DashboardAlert() {
  return (
    <section className='mt-6 md:mt-8 lg:mt-10 px-4 md:px-5 lg:px-6 py-4 md:py-5 lg:py-6 flex justify-start items-center bg-[#FFF4E6] border-l-4 border-[#F59E0B] rounded-lg space-x-3 md:space-x-4 lg:space-x-5 shrink-0 shadow-sm'>
      <i className="ri-information-line text-[#F59E0B] text-xl md:text-2xl lg:text-2xl"></i>
      <h1 className='text-[#333333] font-medium text-xs md:text-sm lg:text-base'>Your rental for Excavator ends tomorrow 15 November, 2025</h1>
    </section>
  )
}

export default DashboardAlert
