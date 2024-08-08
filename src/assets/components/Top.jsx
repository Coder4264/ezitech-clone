import React from 'react'

export default function Top() {
  return (
    <div className='bg-blue-500 md:flex hidden justify-center items-center gap-10 text-sm p-2'>
        <div className='flex items-center gap-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/16703/16703465.png" className='w-4 cursor-pointer invert' alt="" />
            <p className='text-white font-semibold '> +92 3455555396</p>
        </div>
        
        <div className='flex items-center gap-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" className='w-4 cursor-pointer invert' alt="" />
            <p className='text-white font-semibold'>  Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan</p>
        </div>

        <div className='flex items-center gap-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png" className='w-4 cursor-pointer invert' alt="" />
            <p className='text-white font-semibold'>  
            Mon - Fri 8.00 - 20.00
            </p>
        </div>

        <div className='flex items-center gap-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" className='w-4 cursor-pointer invert' alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" className='w-4 cursor-pointer invert' alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/733/733594.png" className='w-4 cursor-pointer invert' alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" className='w-4 cursor-pointer invert ' alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384086.png" className='w-4 cursor-pointer invert ' alt="" />
        </div>

        
        <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/456/456283.png" className='w-4 cursor-pointer invert' alt="" />
            <p className='uppercase text-xs font-bold text-white'>login</p>
            </div>

            <div className='h-3 w-px bg-slate-100'>

            </div>

            <div>
                <a href="" className='uppercase text-xs font-bold text-white'>register</a>
            </div>
        </div>

        
    </div>
  )
}
