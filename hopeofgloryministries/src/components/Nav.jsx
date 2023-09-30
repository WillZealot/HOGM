import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { GiKey } from "react-icons/gi"
import { Link } from 'react-scroll';
import Stars from "../hogassets/stars.jpg"

const Nav = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Stars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

      const backgroundFirstStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '10vh', // Adjust the height as needed
      };
      

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
<div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 text-slate-100' style={backgroundFirstStyle}>
        <div>
            <h1 className='text-3xl font-semibold flex'>
                <GiKey></GiKey>
            </h1>
        </div>

        {/* menu */}
        <ul className='md:flex hidden pr-3 text-[20px]'>
            <li className='hover:scale-110 transition-transform'>
                <Link to="Home" spy={true} smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='hover:scale-110 transition-transform'>
                <Link to="About" spy={true} smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li className='hover:scale-110 transition-transform'>
                <Link to="Events" spy={true} smooth={true} duration={500} >
                    Events
                </Link>
            </li>
            <li className='hover:scale-110 transition-transform'>
                <Link to="Contact" spy={true} smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
            <li className='hover:scale-110 transition-transform'>
                <Link to="Give" spy={true} smooth={true} duration={500} >
                    Give
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'} style={backgroundStyle}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="Home" spy={true} smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="About" spy={true} smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="Events" spy={true} smooth={true} duration={500} >
                    Events
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="Contact" spy={true} smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="Give" spy={true} smooth={true} duration={500} >
                    Give
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav;
