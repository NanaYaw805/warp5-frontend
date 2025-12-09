'use client';

import Image from 'next/image';
import Link from 'next/link';
import WarpLogoWhite from '@/public/logo/warp-logo-white.svg';


function Footer() {
  return (
    <>
      <footer className='mt-20 bg-[#43A047]'>
        <div className="max-w-4xl mx-auto py-12">
          <div className='grid grid-cols-1 gap-20 xl:grid-cols-[1fr_auto] xl:gap-6'>
            <div className='flex flex-col items-center justify-center xl:items-start'>
              <Image src={WarpLogoWhite} alt='Warp Logo' width={100} height={100} className='w-30 xl:w-50' />

              <div className='mt-8 xl:mt-12'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-base text-[#FFFFFF] font-semibold xl:text-xl'>Quick Links</h1>
                </div>
                <div className='flex space-x-8 mt-4'>
                  <Link href='#' className='text-[#FFFFFF] text-xs lg:text-base font-light'>
                    About
                  </Link>
                  <Link href='#' className='text-[#FFFFFF] text-xs lg:text-base font-light'>
                    Blog
                  </Link>
                  <Link href='#' className='text-[#FFFFFF] text-xs lg:text-base font-light'>
                    Careers
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-start text-start'>
              <h1 className='text-base text-[#FFFFFF] font-semibold xl:text-xl'>Get In Touch</h1>

              <div className='flex flex-col mt-4 space-y-4'>
                <p className='text-[#FFFFFF] text-sm font-light xl:text-base'>123 Main Street, Accra, Ghana</p>
                <p className='text-[#FFFFFF] text-sm font-light xl:text-base'>info@warp5.com</p>
                <p className='text-[#FFFFFF] text-sm font-light xl:text-base'>+233 123 456 789 / +233 *** ****</p>
              </div>
            </div>
          </div>

          <div className='mt-20'>
            <div className='flex justify-center items-center'>
              <p className='text-[#FFFFFF] text-sm xl:text-base'>&copy; {new Date().getFullYear()} Warp5. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
