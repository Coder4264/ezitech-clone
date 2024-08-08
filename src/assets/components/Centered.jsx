import React from 'react'

export default function Centered() {
  return (
    <div  className='flex items-center justify-center md:mt-36 mt-48 md:w-8/12 w-full mx-auto'>
        <div>
            <div>
                <h1 className='md:text-5xl text-4xl  text-white text-center font-bold w-full md:inline hidden'>Learn the fundamentals with our</h1>
                <div className='flex mx-auto flex-col md:flex-row px-12 py-5 md:ml-28 ml-0'>
                    <h1 className=' md:text-5xl md:inline hidden text-4xl text-white text-center font-bold'>Experts in </h1>
                    <h1 className='animation-text text-sky-300 md:text-5xl text-5xl px-2 text-center font-bold'></h1>
                </div>    
            </div>
            <div>
                <h1 className='md:text-2xl text-3xl md:font-semibold font-bold text-white  md:mt-10 text-center p-5'>Utilize Effective Learning To Reach Your Potential!</h1>
            </div>
            <div className='md:flex hidden items-center mx-auto md:w-6/12  bg-white px-3 rounded-xl'>
                <input type="search" placeholder='Search courses...' className=' w-full py-4 p-2 outline-none' />
                <img className='w-7 h-7 p-1  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
            </div>

            <div className='mx-auto md:w-6/12 w-full mt-5  px-6 md:flex hidden items-center justify-center gap-1 mx-auto'>
                <h1 className='text-lg text-white font-semibold'>Explore our more useful products </h1>
                <img src="https://cdn-icons-png.flaticon.com/128/2077/2077502.png" className='w-7 h-7 invert pointer ' alt="" />
                
            </div>

            <div className='md:flex hidden items-center justify-around mx-auto mt-3'>
                <img className='md:w-48 w-32' src="https://ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png" alt="" />
                <img className='md:w-40 w-32' src="https://ezitech.org/wp-content/uploads/2023/11/white-ezipos.png" alt="" />
                <img className='md:w-60 w-32' src="https://ezitech.org/wp-content/uploads/2023/10/white-lgooo-01.png" alt="" />

            </div>
        </div>
    </div>
  )
}
