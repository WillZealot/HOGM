import React, {useState} from 'react';
import {FaBars, FaTimes,} from "react-icons/fa";
import Logo from "../hogassets/logo2.png";
import { Link } from 'react-scroll';

const Nav = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#24221F] text-slate-100'>
        <div>
            <img src={Logo} alt='logopic' style={{width:'80px'}}></img>
        </div>

        {/* menu */}
            <ul className='md:flex hidden pr-3'>
                <li>
                <Link to="Home" spy={true} smooth={true} duration={500} >
                Home
                </Link>    
                </li>
                <li>
                <Link to="About" spy={true} smooth={true} duration={500} >
                About
                </Link>    
                </li>
                <li>
                <Link to="Events" spy={true} smooth={true} duration={500} >
                Events
                </Link>    
                </li>
                <li>
                <Link to="Contact" spy={true} smooth={true} duration={500} >
                Contact
                </Link>    
                </li>
                <li>
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
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#001C55] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500} >
                Home
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500} >
                About
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="events" spy={true} smooth={true} duration={500} >
                Events
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500} >
                Contact
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="give" spy={true} smooth={true} duration={500} >
                Give
                </Link></li>
        </ul>
    </div>
  )
}

export default Nav;