import React from 'react'
import dayjs from 'dayjs'

export default function Footer() {
    const updatedYear = dayjs().year();
  return (
    <div className='footer-container '>
        <div className='footer-sections-container w-10/12 mx-auto p-10 flex gap-10 flex-wrap md:flex-nowrap '>
            <div className="about-container w-full md:w-3/12 mt-20">
                <h1 className='text-lg font-bold mb-7 '>ABOUT</h1>
                <p className='text-sm text-justify'>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
            </div>
            <div className="popular-courses-container w-10/12 md:w-4/12 mt-20">
                <h3 className='text-lg font-bold mb-7'>POPULAR COURSES</h3>
                {/* item-1 */}
                <div className='flex items-center justify-evenly gap-5 mb-3 hover:text-blue-600'>
                    <img src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-100x100.webp" className='w-16' alt="" />
                    <div className='flex flex-col'>
                    <a href='' className='text-sm text-ellipsis overflow-hidden whitespace-nowrap md:max-w-56 max-w-52 font-bold'>Online Arbitrage Mastermind 2.0 [Rawalpindi]</a>

                        <a href='' className='text-xs text-slate-400 '>By Some Author</a>
                    </div>
                </div>

                {/* item-2 */}

                <div className='flex items-center justify-evenly gap-5 hover:text-blue-600'>
                    <img src="https://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-_FILEminimizer_-100x100.webp" className='w-16' alt="" />
                    <div className='flex flex-col'>
                        <a href='' className='text-sm text-ellipsis overflow-hidden whitespace-nowrap md:max-w-56 max-w-52 font-bold'>The Complete Bootcamp 2024: Node.js</a>
                        <a href='' className='text-xs text-slate-400'>By Company</a>
                    </div>
                </div>   
            </div>

            <div className='pages-container  w-full md:w-3/12 mt-20'>
                <h3 className='text-lg font-bold mb-7'>PAGES</h3>
                <a href="" ><li className='text-xs mb-2 hover:text-blue-600'>BLOGS</li></a>          
                <a href="" ><li className='text-xs mb-2 hover:text-blue-600'>EZICODING</li></a>
                <a href="" ><li className='text-xs mb-2 hover:text-blue-600'>INTERNSHIP</li></a>
                <a href="" ><li className='text-xs mb-2 hover:text-blue-600'>OUR SERVICES</li></a>
            </div>

            <div className='contact-pages-container w-full md:w-3/12 flex flex-col gap-5 mt-20'>
                <h3 className='text-lg font-bold mb-7'>CONTACT</h3>
                <div className='flex gap-2'>
                    <img src="https://cdn-icons-png.flaticon.com/128/149/149060.png" className='w-6 h-6' alt="" />
                    <h3 className='text-sm'>Office #000-0 XXXX XXXXX, XXXX XXXXX XXXXXXXX, XXXXXXXXXX, XXXXXX 00000</h3>
                </div>
                <div className='flex gap-2'>
                    <img src="https://cdn-icons-png.flaticon.com/128/10797/10797331.png" className='w-6 h-6' alt="" />
                    <h3>+923XXXXXXXXX</h3>
                </div>
                <div className='flex gap-2 hover:text-blue-600'>
                    <img src="https://cdn-icons-png.flaticon.com/128/15889/15889542.png" className='w-6 h-6' alt="" />
                    <h3>info@someone.org</h3>
                </div>
                
            </div>

            
        </div>

          <div className="footer">
              <h3 className='text-sm text-center p-2'>Copyright © {updatedYear} Rehan Tufail | Design & Develop by <a href="" className='underline decoration-solid hover:text-blue-600'>Rehan Tufail</a></h3>
              <div>
                  <div className='flex items-center gap-5 justify-end pb-10 md:pr-40'>
                      <img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" className='w-4 cursor-pointer invert' alt="" />
                      <img src="https://cdn-icons-png.flaticon.com/128/733/733594.png" className='w-4 cursor-pointer invert' alt="" />
                      <img src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" className='w-4 cursor-pointer invert ' alt="" />
                  </div>
              </div>
          </div>
    </div>
  )
}
