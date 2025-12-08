'use client'

import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../public/logo/warp-logo.svg';
import BannerImage from '../public/images/banner.jpg';
import Car1Image from '../public/cars/car1.jpg';
import Car2Image from '../public/cars/car3.jpg';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showEquipmentModal, setShowEquipmentModal] = useState(false);
  const [showPriceRangeModal, setShowPriceRangeModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Your City');
  const [selectedEquipment, setSelectedEquipment] = useState('Choose Type');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showDateRangeModal, setShowDateRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');


  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/renter/dashboard' },
    { label: 'Help', path: '/help' },
  ];

  const cities = [
    'Kumasi',
    'Accra',
    'Takoradi',
    'Cape Coast',
    'Tamale',
    'Bolga',
    'Sunyani',
    'Obuasi',
    'Techiman',
    'Ho',
  ];

  const equipmentTypes = [
    'Dragline Excavator',
    'Continuous Miner',
    'Bucket Wheel Excavator',
    'Longwall Miner',
    'Hydraulic Mining Shovel',
    'Roadheader',
    'Electric Rope Shovel',
    'Load-Haul Dump (LHD) Loader',
    'Wheel Loader',
    'Underground Mining Truck',
    'Bulldozer',
    'Rotary Drill',
    'Grader',
    'Blasthole Drill',
    'Haul Truck',
    'Rock Bolter',
    'Crusher',
    'Shotcrete Machine',
  ];

  const highlyRatedCars = [
    { id: 1, image: Car1Image, name: 'Bucket Wheel Excavator', location: 'Kumasi, Ghana', rating: '4.8', price: 'GHC1,123' },
    { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9', price: 'GHC1,123' },
    { id: 3, image: Car1Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0', price: 'GHC1,123' },
    { id: 4, image: Car2Image, name: 'BMW X5', location: 'Accra', rating: '4.7', price: 'GHC1,123' },
    { id: 5, image: Car1Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9', price: 'GHC1,123' },
    { id: 5, image: Car2Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9', price: 'GHC1,123' },
  ];

  return (
    <>
      <main className="h-screen bg-white">
        <header className="sticky top-0 h-24 z-[9999] bg-white">
          <div className="max-w-[85vw] mx-auto grid grid grid-cols-3 items-center h-full">
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="Warp Logo"
                width={100}
                height={100}
                className="w-30 cursor-pointer"
              />
            </div>

            <nav className="flex justify-center items-center space-x-6">
              {navItems.map(({ label, path }) => (
                <div
                  onClick={() => router.push(path)}
                  key={path}
                  className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white'} cursor-pointer flex items-center justify-center w-32 h-12 rounded-full`}
                >
                  <h1 className="text-base font-medium">{label}</h1>
                </div>
              ))}
            </nav>

            <div className="flex justify-end items-center space-x-8">
              <div className="flex justify-center items-center bg-[#FFF0F6] w-16 h-16 rounded-full">
                <i className="ri-heart-3-fill text-[#FF0063] text-2xl"></i>
              </div>

              <div className="flex justify-center items-center">
                <i className="ri-notification-2-line text-[#000000] text-2xl"></i>
              </div>

              <div className="flex justify-center items-center border border-[#333333] px-12 py-3 rounded-full">
                <h1 className="text-base text-[#333333] font-semibold">Log In</h1>
              </div>
            </div>
          </div>
        </header>

        <section className="h-[550px] bg-black">
          <div className="relative h-full">
            <Image src={BannerImage} alt='Banner' fill className='object-cover' priority />
            <div className='absolute inset-0 bg-black/30'></div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <div className="grid grid-cols-5 bg-white/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-7xl border border-[#DDDDDDB2]/70 gap-6">

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-lg mb-2">Location</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowLocationModal(!showLocationModal)}
                  >
                    <h1 className="text-[#DDDDDD]">{selectedLocation}</h1>
                    <i className="ri-arrow-down-s-line text-[#DDDDDD] text-2xl ml-2"></i>
                  </div>

                  {showLocationModal && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-64 max-h-60 overflow-y-auto z-50">
                      {cities.map((city) => (
                        <div
                          key={city}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded text-gray-800"
                          onClick={() => {
                            setSelectedLocation(city);
                            setShowLocationModal(false);
                          }}
                        >
                          {city}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-lg mb-2">Equipment</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowEquipmentModal(!showEquipmentModal)}
                  >
                    <h1 className="text-[#DDDDDD]">{selectedEquipment}</h1>
                    <i className="ri-arrow-down-s-line text-[#DDDDDD] text-2xl ml-2"></i>
                  </div>

                  {showEquipmentModal && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-72 max-h-60 overflow-y-auto z-50">
                      {equipmentTypes.map((equipment) => (
                        <div
                          key={equipment}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded text-gray-800"
                          onClick={() => {
                            setSelectedEquipment(equipment);
                            setShowEquipmentModal(false);
                          }}
                        >
                          {equipment}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-lg mb-2">Price Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowPriceRangeModal(!showPriceRangeModal)}
                  >
                    <h1 className="text-[#DDDDDD]">
                      {minPrice && maxPrice ? `$${minPrice} - $${maxPrice}` : 'Select Range'}
                    </h1>
                    <i className="ri-arrow-down-s-line text-[#DDDDDD] text-2xl ml-2"></i>
                  </div>

                  {showPriceRangeModal && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-6 w-80 z-50">
                      <h3 className="text-gray-800 font-medium mb-4">Select Price Range</h3>
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          placeholder="Min"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                          className="w-[120px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43A047]"
                        />
                        <span className="text-gray-500">-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          className="w-[120px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43A047]"
                        />
                      </div>
                      <button
                        onClick={() => setShowPriceRangeModal(false)}
                        className="w-full mt-4 bg-[#43A047] hover:bg-[#388E3C] text-white py-2 rounded-lg font-medium transition-colors duration-300"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-lg mb-2">Date Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowDateRangeModal(!showDateRangeModal)}
                  >
                    <h1 className="text-[#DDDDDD]">
                      {fromDate && toDate ? `${fromDate} - ${toDate}` : 'Select Dates'}
                    </h1>
                  </div>

                  {showDateRangeModal && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-6 w-96 z-50">
                      <h3 className="text-gray-800 font-medium mb-4">Select Date Range</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">From</label>
                          <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43A047]"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">To</label>
                          <input
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43A047]"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button
                          onClick={() => {
                            setFromDate('');
                            setToDate('');
                            setShowDateRangeModal(false);
                          }}
                          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-medium transition-colors duration-300"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setShowDateRangeModal(false)}
                          className="flex-1 bg-[#43A047] hover:bg-[#388E3C] text-white py-2 rounded-lg font-medium transition-colors duration-300"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center">
                  <button className="bg-[#000000] text-white px-8 py-3 rounded-lg font-semibold flex items-center cursor-pointer">
                    Search
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-xl">Highly Rated By Customers</h1>

            <div className="mt-8 grid grid-cols-6 gap-12">
              {highlyRatedCars.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="relative w-full h-[220px] overflow-hidden rounded-3xl">
                    <Image src={item.image} alt='Car' fill className='object-cover' />
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <h1 className="text-[#333333] font-medium text-base mt-2">{item.name}</h1>
                    <h1 className="text-[#787878] text-sm">
                      <i className="ri-map-pin-2-line text-base mr-1"></i>
                      {item.location}
                    </h1>
                    <h1 className="text-[#787878] text-sm mt-1">
                      <i className="ri-star-fill text-base mr-1"></i>
                      {item.rating}
                    </h1>

                    <div className="w-full flex justify-between items-center">
                      <div className="flex space-x-1">
                        <h1 className="text-[#333333] font-semibold text-base">{item.price}/</h1>
                        <h1 className="text-[#787878] text-base">day</h1>
                      </div>

                      <div className="flex justify-center items-center bg-[#43A047] px-4 py-3 rounded-2xl cursor-pointer">
                        <h1 className="text-white text-sm">View Details</h1>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-xl">Most View Equipment</h1>

            <div className="mt-8 grid grid-cols-6 gap-12">
              {highlyRatedCars.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="relative w-full h-[220px] overflow-hidden rounded-3xl">
                    <Image src={item.image} alt='Car' fill className='object-cover' />
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <h1 className="text-[#333333] font-medium text-base mt-2">{item.name}</h1>
                    <h1 className="text-[#787878] text-sm">
                      <i className="ri-map-pin-2-line text-base mr-1"></i>
                      {item.location}
                    </h1>
                    <h1 className="text-[#787878] text-sm mt-1">
                      <i className="ri-star-fill text-base mr-1"></i>
                      {item.rating}
                    </h1>

                    <div className="w-full flex justify-between items-center">
                      <div className="flex space-x-1">
                        <h1 className="text-[#333333] font-semibold text-base">{item.price}/</h1>
                        <h1 className="text-[#787878] text-base">day</h1>
                      </div>

                      <div className="flex justify-center items-center bg-[#43A047] px-4 py-3 rounded-2xl cursor-pointer">
                        <h1 className="text-white text-sm">View Details</h1>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}