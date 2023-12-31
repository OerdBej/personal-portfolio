import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div className='w-full h-screen bg-[#0a192f]' name='home'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
                <p className='text-pink-500'>Hi my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold-text text-[#ccd6f6]'>
                    Oerd Bej
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold-text text-[#8892b0] '>
                    Frontend Developer
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    As a Frontend Developer, I am driven by a passion for
                    learning and consistently challenge myself through a variety
                    of modular projects to create high-quality, user-centric
                    solutions. With expertise in both front-end and back-end
                    development, I am dedicated to providing ongoing support and
                    ensuring that my solutions meet user needs.
                </p>
                {/* button */}
                <div>
                    <Link to='work' smooth={true} offset={50} duration={500}>
                        <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-300  '>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-7' />
                            </span>
                        </button>{' '}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
