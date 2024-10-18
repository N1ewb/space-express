import Image from 'next/image'
import React from 'react'

import SpaceExpressLogo from '../../images/space-express.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex flex-row w-full items-center justify-between py-10 px-20 bg-white text-[24px] fixed z-50'>
        <div className="logo-container">
            <Image src={SpaceExpressLogo} alt='logo' width={330} height={100}   />
        </div>
        <div className="nav-links flex flex-row items-center text-[#52145A] w-[55%] justify-between [&_a]:m-0">
            <Link href='#'>HOME</Link>
            <Link href='#'>SERVICES</Link>
            <Link href='#'>ABOUT US</Link>
            <Link href='#'>CONTACT US</Link>
            <Link href='#'>STATEMENTS</Link>
            
        </div>
        <button className='bg-[#52145A] px-10 py-5 rounded-md'>BOOK NOW</button>
    </nav>
  )
}

export default Navbar