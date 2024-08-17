import React from 'react'
import ss1 from './ss1.png';
import ss2 from './ss2.png';
import ss3 from './ss3.png';

export default function Cards() {

  const cards = [
    {
      "id": "1",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/artificial-intelligence-3-69x69.png.webp",
      "title": "ML & AI"
    },
    {
      "id": "2",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/blockchain-69x69.png.webp",
      "title": "Block Chain"
    },
    {
      "id": "3",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/aaaa-69x69.png.webp",
      "title": "Amazon"
    },
    {
      "id": "4",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/cccccc-69x69.png.webp",
      "title": "Cyber Security"
    },
    {
      "id": "5",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/ffff-69x69.png.webp",
      "title": "Development"
    },
    {
      "id": "6",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/www-69x69.png.webp",
      "title": "Designing"
    },
    {
      "id": "7",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/vvvv-69x69.png.webp",
      "title": "Gaming"
    },
    {
      "id": "8",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/ssss-69x69.png.webp",
      "title": "Architecture"
    },
    {
      "id": "9",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/05/aaaaaaaaaaaaaaaaaaaaaa-69x69.png.webp",
      "title": "IOS & AND"
    },
    {
      "id": "10",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2022/10/social-media-1-63x63.png.webp",
      "title": "Marketing"
    },
    {
      "id": "11",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2023/03/3d-68x68.png",
      "title": "3D"
    },
    {
      "id": "12",
      "imgUrl": "https://ezitech.org/wp-content/uploads/2023/03/animation-68x68.png",
      "title": "Animation"
    }
  ]
  return (
    <div className='mt-24 mb-10'>
      <h1 className='text-center text-5xl font-semibold '>How it works?</h1>
      <div className='flex flex-col md:flex-row justify-between items-center mx-auto w-8/12 mb-24'>
        <img className='w-full mb-20 md:mb-0 md:w-3/12' src={ss1} alt="" />
        <img className='w-full mb-20 md:mb-0 md:w-3/12' src={ss2} alt="" />
        <img className='w-full mb-20 md:mb-0 md:w-3/12' src={ss3} alt="" />
      </div>



      <div className="cards flex gap-5 flex-wrap w-10/12 mx-auto mb-20">
        {cards.map(({ id, imgUrl, title }) => (
          <div className="flex justify-evenly flex-col px-8 py-3 mx-auto rounded-3xl shadow-lg h-full w-full  md:h-48 md:w-48 cursor-pointer hover:-translate-y-3 duration-500 mb-10" key={id}>
            <img className="w-20 h-20 mx-auto" src={imgUrl} alt="" />
            <p className="p-3 text-center font-bold">{title}</p>
          </div>
        ))}



      </div>
    </div>
  )
}
