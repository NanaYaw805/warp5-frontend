'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

function UserModal({ setShowUserModal }: { setShowUserModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  const router = useRouter();

  return (
    <>
      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl w-56 z-50 border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-[#333333]">My Account</h3>
        </div>
        <div className="py-2">
          <button
            onClick={() => { router.push('/profile'); setShowUserModal(false); }}
            className="w-full text-left px-4 py-2 text-sm text-[#333333] hover:bg-gray-50 flex items-center space-x-2"
          >
            <i className="ri-user-line text-base"></i>
            <span>Profile</span>
          </button>
        </div>
        <div className="border-t border-gray-100 py-2">
          <button
            onClick={() => { setShowUserModal(false); }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center space-x-2"
          >
            <i className="ri-logout-box-line text-base"></i>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default UserModal
