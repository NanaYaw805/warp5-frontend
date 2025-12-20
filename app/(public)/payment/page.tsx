'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';
import Car1Image from '../../../public/cars/car1.jpg';

function Page() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const orderDetails = {
    id: 'ORD-7723-XJ',
    item: 'CAT 320 GC Hydraulic Excavator',
    image: Car1Image,
    total: 15300,
    date: 'Nov 01 - Nov 12, 2025'
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment Successful! (Demo)');
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50/50 font-sans text-gray-900 flex flex-col">
      <PageHeader />

      <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 md:px-6 w-full flex-grow">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Complete Payment</h1>
          <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
            <i className="ri-lock-2-fill text-green-600"></i>
            Secure SSL Encrypted Transaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: Payment Form (7 cols) */}
          <div className="md:col-span-12 lg:col-span-7 space-y-6">

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
              {/* Payment Method Tabs */}
              <div className="flex border-b border-gray-100 bg-gray-50/50 p-2">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${paymentMethod === 'card' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  <i className="ri-bank-card-fill text-lg"></i> Card Payment
                </button>
                <button
                  onClick={() => setPaymentMethod('momo')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${paymentMethod === 'momo' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  <i className="ri-smartphone-line text-lg"></i> Mobile Money
                </button>
              </div>

              <div className="p-6 md:p-8">

                {paymentMethod === 'card' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Card Number</label>
                      <div className="relative">
                        <i className="ri-mastercard-fill absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400"></i>
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all font-mono text-gray-700 placeholder:text-gray-300" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Expiry Date</label>
                        <input type="text" placeholder="MM / YY" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all font-mono text-center" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex justify-between">
                          CVC / CVV
                          <i className="ri-question-line text-gray-400 cursor-help" title="3 digits on back of card"></i>
                        </label>
                        <input type="text" placeholder="123" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all font-mono text-center" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Cardholder Name</label>
                      <input type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'momo' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Select Network</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['MTN', 'Vodafone', 'AirtelTigo'].map(net => (
                          <button key={net} className="border border-gray-200 hover:border-green-500 rounded-xl py-3 text-sm font-medium hover:bg-green-50 text-gray-600 hover:text-green-700 transition-colors">
                            {net}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Mobile Number</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+233</span>
                        <input type="tel" placeholder="XX XXX XXXX" className="w-full h-12 pl-16 pr-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all font-mono" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={handlePay}
                    disabled={isProcessing}
                    className="relative w-full h-14 bg-black hover:bg-green-600 disabled:bg-gray-300 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 active:scale-95 overflow-hidden group"
                  >
                    <span className={`flex items-center justify-center gap-2 ${isProcessing ? 'opacity-0' : 'opacity-100'}`}>
                      Pay GH₵ {orderDetails.total.toLocaleString()}
                    </span>
                    {isProcessing && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                    <i className="ri-shield-check-fill text-green-500"></i>
                    Payments processed securely by Warp5 Pay
                  </p>
                </div>

              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Summary (5 cols) */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>

              <div className="flex gap-4 mb-6">
                <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                  <Image src={orderDetails.item === 'CAT 320 GC Hydraulic Excavator' ? Car1Image : Car1Image} alt="Equipment" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 mb-1">ID: {orderDetails.id}</div>
                  <h4 className="font-bold text-gray-900 leading-tight mb-1">{orderDetails.item}</h4>
                  <p className="text-sm text-green-600 font-medium">{orderDetails.date}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>GH₵ 12,000</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Taxes & Fees</span>
                  <span>GH₵ 3,300</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="font-bold text-gray-900">Total Due</span>
                  <span className="font-bold text-xl text-green-600">GH₵ {orderDetails.total.toLocaleString()}</span>
                </div>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder blocks for badges - In a real app use SVGs/Images */}
              <div className="h-12 border border-gray-200 rounded-lg flex items-center justify-center bg-white"><span className="text-xs font-bold text-gray-500">VISA</span></div>
              <div className="h-12 border border-gray-200 rounded-lg flex items-center justify-center bg-white"><span className="text-xs font-bold text-gray-500">MasterCard</span></div>
              <div className="h-12 border border-gray-200 rounded-lg flex items-center justify-center bg-white"><span className="text-xs font-bold text-gray-500">Momo</span></div>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}

export default Page;