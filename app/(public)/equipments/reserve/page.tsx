'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';
import Car1Image from '../../../../public/cars/car1.jpg';

function Page() {
  const router = useRouter();

  // Mock Data
  const equipment = {
    name: 'CAT 320 GC Hydraulic Excavator',
    image: Car1Image,
    location: 'Takoradi, Ghana',
    pricePerDay: 1200,
    duration: 12,
    serviceFee: 150,
    tax: 50,
  };

  const total = (equipment.pricePerDay * equipment.duration) + equipment.serviceFee + equipment.tax;

  return (
    <main className="min-h-screen bg-gray-50/50 font-sans text-gray-900">
      <PageHeader />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Title */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Secure Reservation</h1>
          <p className="text-gray-500 mt-2">Complete your booking securely in just a few steps.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: User Form (7 cols) */}
          <div className="lg:col-span-7 space-y-10">

            {/* Section 1: Contact Info */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">1</span>
                <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+233 20 000 0000" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* Section 2: Rental Details Review */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">2</span>
                <h2 className="text-xl font-bold text-gray-900">Rental Details</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Pickup Date</label>
                  <div className="font-bold text-gray-900 text-lg">Nov 01, 2025</div>
                  <div className="text-sm text-gray-500">From 8:00 AM</div>
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Return Date</label>
                  <div className="font-bold text-gray-900 text-lg">Nov 12, 2025</div>
                  <div className="text-sm text-gray-500">By 5:00 PM</div>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Additional Notes (Optional)</label>
                <textarea placeholder="Any special requests or delivery instructions?" className="w-full h-24 p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all resize-none"></textarea>
              </div>
            </div>

            {/* Section 3: Payment Method */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">3</span>
                <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative p-4 border-2 border-green-500 bg-green-50/50 rounded-xl cursor-pointer flex items-center justify-between transition-all">
                  <div className="flex items-center gap-3">
                    <i className="ri-bank-card-fill text-xl text-green-600"></i>
                    <span className="font-bold text-gray-900">Credit / Debit Card</span>
                  </div>
                  <i className="ri-checkbox-circle-fill text-xl text-green-600"></i>
                </div>
                <div className="relative p-4 border border-gray-200 hover:border-gray-300 rounded-xl cursor-pointer flex items-center justify-between transition-all opacity-60">
                  <div className="flex items-center gap-3">
                    <i className="ri-wallet-3-line text-xl text-gray-600"></i>
                    <span className="font-medium text-gray-900">Mobile Money</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-xl flex gap-3 text-sm text-yellow-800 border border-yellow-100">
                <i className="ri-shield-check-line text-xl shrink-0"></i>
                <p>Your payment information is encrypted and secure. We do not store your card details.</p>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Order Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">

            <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-8 text-white shadow-2xl overflow-hidden relative">
              {/* Glossy overlay effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <h3 className="text-xl font-bold mb-6 relative z-10">Order Summary</h3>

              <div className="flex gap-4 mb-8 relative z-10">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <Image src={equipment.image} alt={equipment.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-snug mb-1">{equipment.name}</h4>
                  <p className="text-gray-400 text-sm flex items-center gap-1">
                    <i className="ri-map-pin-line text-green-400"></i> {equipment.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 mb-6 relative z-10">
                <div className="flex justify-between text-gray-300">
                  <span>Rate (Daily)</span>
                  <span>GH₵ {equipment.pricePerDay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Duration</span>
                  <span>{equipment.duration} Days</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Service Fee</span>
                  <span>GH₵ {equipment.serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Taxes</span>
                  <span>GH₵ {equipment.tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 relative z-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-medium text-gray-300">Total Amount</span>
                  <span className="text-3xl font-bold text-green-400">GH₵ {total.toLocaleString()}</span>
                </div>
                <p className="text-right text-xs text-gray-500">Includes all fees and taxes</p>
              </div>

            </div>

            <div className="text-xs text-gray-500 text-center px-4 leading-relaxed">
              By clicking the button below, you agree to our <a href="#" className="underline hover:text-green-600">Terms of Service</a> and <a href="#" className="underline hover:text-green-600">Privacy Policy</a>.
            </div>

            <button
              onClick={() => router.push('/payment')}
              className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-600/30 active:scale-95 flex items-center justify-center gap-3"
            >
              <span>Confirm & Pay</span>
              <i className="ri-arrow-right-line"></i>
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}

export default Page;
