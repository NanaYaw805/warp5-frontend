'use client';

import React from 'react';
import Image from 'next/image';
import WarpLogo from '../../../public/logo/warp-logo.svg';
import BannerImage from '../../../public/images/banner.jpg'
import Car1Image from '../../../public/images/car1.png'
import Car2Image from '../../../public/images/car2.png'
import Car3Image from '../../../public/images/car3.png'
import Car4Image from '../../../public/images/car4.png'
import Car5Image from '../../../public/images/car5.png'
import Car6Image from '../../../public/images/car6.png'
import Car7Image from '../../../public/images/car7.png'
import Car8Image from '../../../public/images/car8.png'
import Car9Image from '../../../public/images/car9.png'
import Car10Image from '../../../public/images/car10.png'
import Car11Image from '../../../public/images/car11.png'
import Car12Image from '../../../public/images/car12.png'
import Car13Image from '../../../public/images/car13.png'
import Car14Image from '../../../public/images/car14.png'
import Car15Image from '../../../public/images/car15.png'
import CTAImage from '../../../public/images/cta.png';
import CarGrid from '../components/CarGrid';

const cars = [
  { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
  { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
  { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
  { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
  { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
];

const mostViewedCars = [
  { id: 6, image: Car6Image, name: 'Ford Mustang', location: 'Accra', rating: '4.6' },
  { id: 7, image: Car7Image, name: 'Chevrolet Malibu', location: 'Kumasi', rating: '4.5' },
  { id: 8, image: Car8Image, name: 'Nissan Altima', location: 'Takoradi', rating: '4.4' },
  { id: 9, image: Car9Image, name: 'Hyundai Sonata', location: 'Accra', rating: '4.3' },
  { id: 10, image: Car10Image, name: 'Kia Optima', location: 'Kumasi', rating: '4.2' },
]

const leastViewedCars = [
  { id: 11, image: Car11Image, name: 'Mazda 6', location: 'Accra', rating: '4.1' },
  { id: 12, image: Car12Image, name: 'Subaru Legacy', location: 'Kumasi', rating: '4.0' },
  { id: 13, image: Car13Image, name: 'Volkswagen Passat', location: 'Takoradi', rating: '3.9' },
  { id: 14, image: Car14Image, name: 'Chrysler 300', location: 'Accra', rating: '3.8' },
  { id: 15, image: Car15Image, name: 'Dodge Charger', location: 'Kumasi', rating: '3.7' },
];

function Page() {
  return (
    <>
      <div className='h-screen bg-white'>
        <div className='mx-auto'>

          <div className='w-[90vw] mx-auto h-24 grid grid-cols-3'>
            <div className='flex justify-start items-center'>
              <Image
                src={WarpLogo}
                alt='Warp Logo'
                width={100}
                height={100}
                className='w-32' />
            </div>

            <div className='flex justify-center items-center space-x-2'>
              <div className='flex justify-center items-center w-52 h-14'>
                <h1 className='text-lg text-[#333333] font-medium'>Help</h1>
              </div>

              <div className='flex justify-center items-center h-14 w-52 bg-[#43A047] rounded-full'>
                <h1 className='text-lg text-[#FFFFFF] font-medium'>My Reservations</h1>
              </div>

            </div>
            <div className='flex justify-end items-center space-x-10'>
              <div className='flex justify-center items-center bg-[#FFF0F6] w-14 h-14 rounded-full'>
                <i className="ri-heart-3-fill text-[#FF0063] text-2xl"></i>
              </div>

              <div className='flex justify-center items-center w-14 h-14 rounded-full'>
                <i className="ri-notification-2-line text-[#000000] text-2xl"></i>
              </div>

              <div className='flex justify-center items-center border-[1px] border-[#333333] w-40 h-14 rounded-full'>
                <h1 className='text-[#333333] text-lg font-medium'>Sign Up</h1>
              </div>

            </div>
          </div>

          <div className='relative h-[500px] w-full overflow-hidden mt-5'>
            <Image
              src={BannerImage}
              alt='Banner'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-black/30'></div>

            <div className='relative z-10 flex flex-col justify-end items-center h-full pb-40 px-8'>
              <div className='bg-white/20 backdrop-blur-sm rounded-4xl px-12 py-5 max-w-7xl w-full shadow-xl border border-white/50'>
                <div className='grid grid-cols-5'>

                  <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70'>
                    <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Location</h1>
                    <div className='flex space-x-2'>
                      <h1 className='text-[#DDDDDD] tracking-wide text-base'>Select Your City</h1>
                      <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                    </div>
                  </div>

                  <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70 pl-8'>
                    <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Equipment</h1>
                    <div className='flex space-x-2'>
                      <h1 className='text-[#DDDDDD] tracking-wide text-base'>Choose Type</h1>
                      <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                    </div>
                  </div>

                  <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70 pl-8'>
                    <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Price Range</h1>
                    <div className='flex space-x-2'>
                      <h1 className='text-[#DDDDDD] tracking-wide text-base'>Choose Range</h1>
                      <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                    </div>
                  </div>

                  <div className='flex flex-col items-start justify-center space-y-2 pl-8'>
                    <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Date</h1>
                    <div className='flex space-x-2 items-center'>
                      <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                      <h1 className='text-[#DDDDDD] tracking-wide text-base whitespace-nowrap'>01/11/2025 - 01/11/2025</h1>
                    </div>
                  </div>

                  <div className='flex items-center justify-end pl-8'>
                    <div className='flex justify-center items-center w-32 h-12 bg-[#000000] rounded-xl'>
                      <h1 className='text-white text-base tracking-wide'>Search</h1>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <CarGrid title="Higly Rated By Customers" cars={cars} />
          <CarGrid title="Most Viewed Equipment" cars={mostViewedCars} />
          <CarGrid title="You Might Also Like" cars={leastViewedCars} />

          <div className='mt-10 pb-10 flex justify-center'>
            <div className='flex justify-center items-center w-56 h-16 bg-[#43A047] rounded-full'>
              <h1 className='text-base font-medium text-[#FFFFFF]'>See More</h1>
              <i className="ri-arrow-right-double-line text-[#FFFFFF]"></i>
            </div>
          </div>

          {/**cta section */}
          <div className='mt-20 pb-10'>
            <div className='w-[90vw] mx-auto'>
              <div className='relative w-full h-[550px] overflow-hidden rounded-4xl'>
                <Image
                  src={CTAImage}
                  alt='Call to Action'
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-black/40'></div>

                <div className='relative z-10 flex items-center h-full'>
                  <div className='w-1/2 pl-36 pr-8'>
                    <div className='flex flex-col space-y-6'>
                      <h1 className='text-5xl tracking-wide font-semibold text-white leading-tight'>
                        Reserve Your Mining or<br />
                        Construction <span className='text-[#43A047]'>Equipment</span><br />
                        from us
                      </h1>

                      <p className='text-[#FFFFFF] font-light text-base'>Get the gear you need. Fast, reliable, and ready for your next project.</p>

                      <button className='w-36 h-16 rounded-xl border border-[#FFFFFF] text-white'>Sign Up Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**why choose us */}
          <div className='mt-20'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
