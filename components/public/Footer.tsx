'use client';

import Image from 'next/image';
import Link from 'next/link';
import WarpLogoWhite from '@/public/logo/warp-logo-white.svg';

function Footer() {
  return (
    <footer className='border-t border-gray-100 bg-[#0f172a] text-white pt-20 pb-10'>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative w-32 h-10">
              <Image src={WarpLogoWhite} alt='Warp Logo' fill className='object-contain object-left' />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium heavy equipment rental for the construction and mining industries. Building the future of Ghana, together.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-facebook-fill text-lg"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-twitter-x-line text-lg"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-linkedin-fill text-lg"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-instagram-line text-lg"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-green-400 transition-colors text-sm">News & Blog</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Our Partners</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact Center</Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-green-400 transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for new inventory updates and tips.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-all"
                />
                <button type="submit" className="absolute right-1.5 top-1.5 h-9 w-9 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-500 transition-colors">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Warp5. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
