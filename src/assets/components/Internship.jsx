import React from 'react'
import Buttons from './Buttons'
// import "/src/index.css"

export default function Internship() {
    const internshipData = [
        {
            "id" : "1",
            "title" : "HTML/CSS JAVASCRIPT",
            "img" : "https://ezitech.org/wp-content/uploads/2024/02/web-design.png",
            "employmentType" : "Hybrid",
            "location" : "Somewhere",
            "jobType1" : "Full Time",
            "jobType2" : "Part Time"
        },
        {
            "id" : "2",
            "title" : "GRAPHIC DESIGNING",
            "img" : "https://ezitech.org/wp-content/uploads/2024/02/development.png",
            "employmentType" : "Hybrid",
            "location" : "Somewhere",
            "jobType1" : "Full Time",
            "jobType2" : "Part Time"
        },
        {
            "id" : '3',
            "title" : "DIGITAL MARKETING",
            "img" : "https://ezitech.org/wp-content/uploads/2024/02/digital-marketing.png",
            "employmentType" : "Hybrid",
            "location" : "Somewhere",
            "jobType1" : "Full Time",
            "jobType2" : "Part Time"
        },
        {
            "id" : '4',
            "title" : "FLUTTER DEVELOPMENT",
            "img" : "https://ezitech.org/wp-content/uploads/2024/02/app-development.png",
            "employmentType" : "Hybrid",
            "location" : "Somewhere",
            "jobType1" : "Full Time",
            "jobType2" : "Part Time"
        },
        {
            "id" : '5',
            "title" : "MACHINE LEARNING",
            "img" : "https://ezitech.org/wp-content/uploads/2024/02/web-services.png",
            "employmentType" : "Hybrid",
            "location" : "Somewhere",
            "jobType1" : "Full Time",
            "jobType2" : "Part Time"
        },
        {
            "id" : "6",
            "title" : "MERN Development",
            "img" : "https://ezitech.org/wp-content/uploads/2024/02/clean-code.png",
            "employmentType" : "Hybrid",
            "location" : "Somewhere",
            "jobType1" : "Full Time",
            "jobType2" : "Part Time"
        },
    ]
  return (
    <div className=''>
        <div>
            <h1 className='text-3xl font-extrabold text-center'> Perfect Internship's For You</h1>
        </div>
         
        
        <div className="internship-cards flex flex-col md:flex-row flex-wrap gap-5  md:w-11/12 w-full mx-auto items-center justify-center  mt-20">

            {/* internship card */}
            
            {internshipData.map(({id, title, img, employmentType, location, jobType1, jobType2})=>(        

            <div className="internship rounded-2xl md:w-3/12 w-11/12 shadow-xl hover:scale-90 duration-1000" >
                <div className='card-bg-img h-26 flex justify-between items-center p-2'>
                    <div className='flex flex-col'>
                        <h1 className='md:text-xl text-xl text-wrap font-extrabold text-white p-1'>{title}</h1>
                        <h3 className='text-sm  text-white border-t-2 border-t-white w-2/3 p-1'>Exitech Institute</h3>
                    </div>  
                    <div>
                        <img src={img} className='md:w-10 md:h-10 w-10 h-10' alt="" />
                    </div>                
                                 
                </div>
                {/* Internship Employment status */}

                <div className='flex items-center gap-5 p-3'>
                    <div className="employment flex justify-center items-center w-10 h-10 rounded-full bg-slate-300">
                        <img src="https://cdn-icons-png.flaticon.com/128/17213/17213078.png" className='w-7' alt="" />
                    </div>
                    <div className='flex items-center justify-between gap-1'>
                        <h1 className='font-medium'>Employment - </h1>
                        <span className='bg-slate-100 px-2 py-1 text-slate-800 rounded-lg'>{employmentType}</span>
                    </div>
                </div>


                {/* Internship Location status */}
                <div className='flex items-center gap-5 p-3'>
                    <div className="location flex justify-center items-center w-10 h-10 rounded-full bg-slate-300">
                        <img src="https://cdn-icons-png.flaticon.com/128/447/447031.png" className='w-7' alt="" />
                    </div>
                    <div className='flex items-center justify-between gap-1'>
                        <h1 className='font-medium'>Location -</h1> 
                        <span className='bg-slate-100 px-2 py-1 text-slate-800 rounded-lg'>{location}</span>
                    </div>
                </div>


                {/* Internship job status */}
                <div className='flex items-center gap-5 p-3'>
                    <div className="job-type flex justify-center items-center w-10 h-10 rounded-full bg-slate-300">
                        <img src="https://cdn-icons-png.flaticon.com/128/4994/4994936.png" className='w-7' alt="" />
                    </div>
                    <div className='flex items-center justify-evenly gap-1'>
                        <h1 className='font-medium'>Job Type -</h1>
                        <span className='bg-slate-100 px-1 py-1 text-slate-800 mr-2 rounded-lg text-sm w-22 border'>{jobType1}</span>
                        <span className='bg-slate-100 px-1 py-1 text-slate-800 ml-2 rounded-lg text-sm w-22 border'>{jobType2}</span>
                    </div>
                </div>
                <div className='flex justify-center items-center p-5'>
                    <Buttons
                        text = "Read More"
                        bgColor = "#2575ed"
                        color = "white"
                        className="btn-1"
                    />
                </div>
            </div>



            
            ))}
            
            
            <div className='flex justify-center items-center w-11/12 mb-28'>
                
            <Buttons
                text = "Read More"
                bgColor = "#2575ed"
                color = "white"
                className="btn-1"
            />
            </div>
            </div>

            
    </div>
  )
}
