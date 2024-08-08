import React from 'react'

export default function SupportIcon() {
  return (
    <div>
        <div className='w-14 h-14 bg-blue-500 fixed bottom-6 left-8 rounded-full flex items-center justify-center z-50' >
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" className='w-9 cursor-pointer invert' alt="" />
        </div>
        <a href='' className='bg-white inline p-2 text-xs rounded fixed bottom-9 left-24 pr-10 z-50'>Need Help? <span className='font-bold'>Chat with us</span></a>
    </div>
  )
}
