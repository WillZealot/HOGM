import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

import backphoto from '../hogassets/75DB4336-B8A5-4CEA-A492-A2CC793B1DF9.jpeg'


const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backphoto})` }}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        {/* Text content */}
        <div className='lg:flex-row flex-col-reverse flex justify-center items-center'>
          <div className='text-center lg:text-left lg:w-6/8'>
            <p className='text-[#ccd6f6]'>Welcome To</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Hope Of Glory Ministries</h1>
            <p className='text-[#BBBCBF] font-bold py-4 max-w-[700px]'>
              I'm a full-stack developer with a specialty in creating a digital experience you won't forget.
              Currently, I'm focused on building responsive unique full-stack applications and growing my
              understanding of more complex topics.
            </p>
            {/* Button */}
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#ccd6f6] hover:border-[#ccd6f6] hover:text-black'>
              <Link to="work" spy={true} smooth={true} duration={500}>
              View Events
              </Link>
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight></HiArrowNarrowRight>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
