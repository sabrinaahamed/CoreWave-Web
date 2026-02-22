import React from 'react'
import logo from '../public/Logo.png'
import Container from './components/Container'

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full z-10 mt-[26px]' >
        <Container>
           <div className='flex items-center justify-between'>
             <img src={logo} alt="Logo" />

             <div>
                <ul className="flex space-x-6">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/testimonial">Testimonial</a></li>
                </ul>
             </div>

             <button className="bg-[#06C279] text-white px-4 py-2 rounded-md">Register</button>
           </div>
        </Container>
    </nav>
  )
}

export default Navbar