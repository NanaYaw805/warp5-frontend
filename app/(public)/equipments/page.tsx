'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Car1Image from '../../../public/cars/car1.jpg';
import Car2Image from '../../../public/cars/car2.jpg';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';
import LocationModal from '@/components/public/LocationModal';
import EquipmentModal from '@/components/public/EquipmentModal';
import PriceModal from '@/components/public/PriceModal';
import DateModal from '@/components/public/DateModal';


function Page() {
  const router = useRouter();

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

  const highlyRatedCars = [
    { id: 1, image: Car1Image, name: 'Bucket Wheel Excavator', location: 'Kumasi, Ghana', rating: '4.8', price: 'GHC1,123' },
    { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9', price: 'GHC1,123' },
    { id: 3, image: Car1Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0', price: 'GHC1,123' },
    { id: 4, image: Car2Image, name: 'BMW X5', location: 'Accra', rating: '4.7', price: 'GHC1,123' },
    { id: 5, image: Car2Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9', price: 'GHC1,123' },
  ];

  return (
    <>
      <main className='h-screen bg-white'>
        <PageHeader />

        <section className="mt-12 px-2 pb-4">
          <div className="relative h-full">
            <div className="relative z-10 h-full pt-10 flex flex-col items-center justify-center xl:pt-30">
              <div className="grid grid-cols-2 border border-black/40 rounded-2xl p-8 w-full max-w-7xl border border-[#DDDDDDB2]/70 gap-6 xl:grid-cols-5">

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm mb-2 xl:text-lg">Location</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowLocationModal(!showLocationModal);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">{selectedLocation}</h1>
                    <i className="ri-arrow-down-s-line text-[#333333] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <LocationModal
                    show={showLocationModal}
                    selectedLocation={selectedLocation}
                    onSelect={setSelectedLocation}
                    onClose={() => setShowLocationModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm mb-2 xl:text-lg">Equipment</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowEquipmentModal(!showEquipmentModal);
                      setShowLocationModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">{selectedEquipment}</h1>
                    <i className="ri-arrow-down-s-line text-[#333333] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <EquipmentModal
                    show={showEquipmentModal}
                    selectedEquipment={selectedEquipment}
                    onSelect={setSelectedEquipment}
                    onClose={() => setShowEquipmentModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm mb-2 xl:text-lg">Price Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowPriceRangeModal(!showPriceRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">
                      {minPrice && maxPrice ? `$${minPrice} - $${maxPrice}` : 'Select Range'}
                    </h1>
                    <i className="ri-arrow-down-s-line text-[#333333] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <PriceModal
                    show={showPriceRangeModal}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onMinPriceChange={setMinPrice}
                    onMaxPriceChange={setMaxPrice}
                    onClose={() => setShowPriceRangeModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm mb-2 xl:text-lg">Date Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowDateRangeModal(!showDateRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">
                      {fromDate && toDate ? `${fromDate} - ${toDate}` : 'Select Dates'}
                    </h1>
                  </div>

                  <DateModal
                    show={showDateRangeModal}
                    fromDate={fromDate}
                    toDate={toDate}
                    onFromDateChange={setFromDate}
                    onToDateChange={setToDate}
                    onClose={() => setShowDateRangeModal(false)}
                    onCancel={() => {
                      setFromDate('');
                      setToDate('');
                      setShowDateRangeModal(false);
                    }}
                  />
                </div>

                <div className="flex items-start justify-start xl:justify-center">
                  <button className="bg-[#000000] text-sm text-white px-8 py-3 rounded-lg font-semibold flex items-center cursor-pointer xl:text-base">
                    Search
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-[85vw] mx-auto">
            <div className="mt-8 grid grid-cols-1 gap-12 xl:grid-cols-5">
              {highlyRatedCars.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="relative w-full h-[300px] overflow-hidden rounded-3xl">
                    <Image src={item.image} alt='Car' fill className='object-cover' />
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <h1 className="text-[#333333] font-medium text-sm mt-2 xl:text-base">{item.name}</h1>
                    <h1 className="text-[#787878] text-xs xl:text-sm">
                      <i className="ri-map-pin-2-line text-base mr-1"></i>
                      {item.location}
                    </h1>
                    <h1 className="text-[#787878] text-xs xl:text-sm mt-1">
                      <i className="ri-star-fill text-base mr-1"></i>
                      {item.rating}
                    </h1>

                    <div className="w-full flex justify-between items-center">
                      <div className="flex space-x-1 items-center">
                        <h1 className="text-[#333333] font-semibold text-sm xl:text-base">{item.price}/</h1>
                        <h1 className="text-[#787878] text-xs xl:text-base">day</h1>
                      </div>

                      <div className="flex justify-center items-center bg-[#43A047] px-4 py-3 rounded-2xl cursor-pointer" onClick={() => router.push('/equipments/details')}>
                        <h1 className="text-white text-xs xl:text-sm">View Details</h1>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className='mt-20 flex justify-center items-center gap-4'>
          <button className='flex items-center justify-center gap-2 border border-[#333333] px-8 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors'>
            <i className="ri-arrow-left-line text-base"></i>
            <span className='text-sm font-medium xl:text-base'>Previous</span>
          </button>
          <button className='flex items-center justify-center gap-2 border border-[#333333] px-8 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors'>
            <span className='text-sm font-medium xl:text-base'>Next</span>
            <i className="ri-arrow-right-line text-base"></i>
          </button>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Page
