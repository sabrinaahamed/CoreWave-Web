import React from 'react'
import Container from '../Container'
import round from '../../../public/round.png'
import men from '../../../public/men.png'

const Banner = () => {
  return (
    <section className='relative bg-[#EEFFF9] pt-[190px] pb-[116px]'>
        <Container>
          <div className='flex items-center justify-between '>
              <div>
                <h1 className='font-lato text-[60px] leading-[71%]'>Empower Your Team </h1><span>With CoreWave's</span>
               <p> Boost Productivity and Wellness in Your Organization with CoreWave's Advanced Tools and Techniques</p>
               <div>
                <button className="bg-[#06C279] text-white px-4 py-2 rounded-md">Explore More</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Watch Video</button>
               </div>
            </div>
            <div className='relative'>
                <img src={round} alt="Round" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-[60%] -translate-y-1/2' src={men} alt="" />
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Banner