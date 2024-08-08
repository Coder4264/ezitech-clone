import React from 'react'

export default function CourseCard() {
    const courses = [
        {
            "id" : "1",
            "img" : "https://ezitech.org/wp-content/uploads/2022/09/javascript.webp",
            "title" : "From Novice to expert, The Complete JavaScript Course 2024!",
            "price" : 7600
        },
        {
            "id" : "2",
            "img" : "https://ezitech.org/wp-content/uploads/2022/10/react-1.webp",
            "title" : "The Complete Guide to React (incl Hooks, React Router, Redux)",
            "price" : 8000
        },
        {
            "id" : "3",
            "img" : "https://ezitech.org/wp-content/uploads/2022/09/fiverr.webp",
            "title" : "Sell Fiverr Gigs Like The Top 1% in Freelancing in 2024",
            "price" : 4500
        },
        {
            "id" : "4",
            "img" : "https://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-_FILEminimizer_.webp",
            "title" : "The Complete Bootcamp 2024: Node.js, Express, MongoDB, and More",
            "price" : 13000
        }
    ];


    const totalPrice = courses.reduce((sum, courses) => sum + courses.price, 0);



    const SocialCourse = [

        {
            "id" : "1",
            "img" : "https://ezitech.org/wp-content/uploads/2022/10/app-tips-google-my-business-00-hero-1.webp",
            "title" : "TripAdvisor, Google My Business, and Local SEO",
            "price" : 5000
        },

        {
            "id" : "2",
            "img" : "https://ezitech.org/wp-content/uploads/2022/10/1294-Thumbnail.width-1200.jpg.webp",
            "title" : "YouTube ads and Google ads",
            "price" : 5000
        },
        {
            "id" : "3",
            "img" : "https://ezitech.org/wp-content/uploads/2022/10/post-3.jpg.webp",
            "title" : "Search Engine Optimization (SEO)",
            "price" : 6000
        },
        {
            "id" : "4",
            "img" : "https://ezitech.org/wp-content/uploads/2022/10/What-is-a-digital-marketing-agency.webp",
            "title" : "Advance Digital Marketing",
            "price" : 6500
        },
        {
            "id" : "5",
            "img" : "https://ezitech.org/wp-content/uploads/2022/10/linkedin-search.webp",
            "title" : "LinkedIn Orientation",
            "price" : 5000
        },
        {
            "id" : "6",
            "img" : "https://ezitech.org/wp-content/uploads/2022/10/what-is-copywriter-hero-_FILEminimizer_-1.webp",
            "title" : "Content Marketing & Copywriting",
            "price" : 5000
        }
        
    ]

    const coursePrice = SocialCourse.reduce((sum, SocialCourses) => sum + SocialCourses.price, 0);
  return (
    // General course list

    <div className='md:w-10/12 w-11/12 mx-auto flex flex-col md:flex-row gap-5 mb-52'>
        <div className='border w-full md:w-6/12 relative'>
            <div className='bg-blue-700 text-white'>
                <h1 className='text-center p-3 text-xl font-bold'>Web Development Course with Industrial Projects</h1>
                <h4 className='text-center p-3'>{courses.length} Courses</h4>
            </div>
            {courses.map(({id, img, title, price})=>(
                <div className='flex justify-between items-center p-1 border-b' key={id}>
                <img src={img} className='w-28 h-16'  alt="" />
                <p className='p-2 text-'>{title}</p>
                <p className='text-slate-400'>PKR{price}</p>             
            </div>
            ))}

            <div className='flex gap-5 absolute mt-5 right-0 border border-t-0 p-2 w-full mt-auto'>
                <p className='font-bold text-right ml-auto'>PKR8,000</p>
                <p><del className='ml-auto'>{coursePrice}</del></p>
            </div>
            
        </div>


        {/* Social Courses list */}


        <div className='border md:w-6/12 md:h-6/12 w-full h-full  relative mt-20 md:mt-0'>
            <div className='bg-blue-700 text-white'>
                <h1 className='text-center p-3 text-xl font-bold'>Web Development Course with Industrial Projects</h1>
                <h4 className='text-center p-3'>{SocialCourse.length} Courses</h4>
            </div>
            {SocialCourse.map(({id, img, title, price})=>(
                <div className='flex justify-between items-center p-1 border-b' key={id}>
                <img src={img} className='w-28 h-16'  alt="" />
                <p className='p-2'>{title}</p>
                <p className='text-slate-400'>PKR{price}</p>  
             
            </div>
            
            
            ))}
            <div className='flex gap-5 absolute mt-5 right-0 border border-t-0 p-2 w-full mt-auto'>
                <p className='font-bold text-right ml-auto'>PKR8,000</p>
                <p><del className='ml-auto'>{coursePrice}</del></p>
            </div>
            
        </div>
    </div>
  )
}
