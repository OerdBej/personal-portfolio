import React from 'react';
import logo from '../assets/oerdbej.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
    // toggle
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    };
    return (
        <div className='fixed w-full h-[80px] flex justify-between text-gray-300 items-center px-4 bg-[#414756]  '>
            <div>
                <img src={logo} alt='oerd bej' style={{ width: '140px' }} />
            </div>

            {/* list items menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} offset={50} duration={500}>
                        Technology
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger: medium hide icons*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#414756] flex flex-col justify-center items-center '
                }>
                {/* mobile list items */}
                <li className='p-6 text-4xl'>
                    <Link
                        to='home'
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className='p-6 text-4xl'>
                    <Link
                        to='about'
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className='p-6 text-4xl'>
                    <Link
                        to='skills'
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}>
                        Technology
                    </Link>
                </li>
                <li className='p-6 text-4xl'>
                    <Link
                        to='work'
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}>
                        Projects
                    </Link>
                </li>
                <li className='p-6 text-4xl'>
                    <Link
                        to='contact'
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social */}
            {/* social */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/oerdbej/'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333] mt-6'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/OerdBej'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>

                    {/* This section is for the curriculum vita and the email that need to be worked on functionality */}

                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg mt-4'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] mt-4'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
