import React from 'react'
import Buttons from './Buttons'

export default function PreFooter() {
  return (
    <div>
      <div className='flex items-center md:flex-row flex-col justify-between w-8/12 mx-auto mb-20 mt-40'>
        <div className='relative bg-blue-500 w-96 h-96  rounded-full flex justify-center items-center w-6/12'>
          <div>
            <img src="https://ezitech.org/wp-content/uploads/2022/11/phone-copy.webp" className='absolute w-80   bottom-0 left-0 z-10' alt="" />
          </div>
        </div>
        <div className='md:w-6/12 w-full flex flex-col gap-5'>
          <h1 className='w-full text-5xl font-bold text-center md:text-left text-gray-700 py-5'>Learning <span className='text-blue-600'>anytime </span> from anywhere</h1>
          <p className='text-wrap text-justify w-full text-lg'>Increase the mobility levelwith Eziline Technology LMS App. Take your course in your pocket and access them whenever you want without any limits. Make your learning more engaging and productive using modern LMS App.</p>
          <div className='flex gap-5'>
            <img src="https://ezitech.org/wp-content/uploads/2022/11/appstore-copy.webp" className='cursor-pointer w-auto' alt="" />
            <img className='cursor-pointer w-auto' src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_22.png" alt="" />
          </div>
        </div>
      </div>

      <div className='pre-footer-overlay w-full h-full'>
        <h1 className='text-center text-4xl w-full md:w-6/12 text-wrap mx-auto font-bold text-white p-10'>It's time to <span className='text-blue-500'>start</span> investing in yourself </h1>
        <img className='mx-auto -mb-20' src="https://ezitech.org/wp-content/uploads/2023/03/8-3-1441x555-copy.webp" alt="" />
      </div>
    </div>
  )
}
