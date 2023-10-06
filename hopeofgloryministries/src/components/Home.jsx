import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

import backphoto from '../hogassets/75DB4336-B8A5-4CEA-A492-A2CC793B1DF9.jpeg';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backphoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div name='Home' className="w-full h-screen" style={backgroundStyle}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        {/* Text content */}
        <div className='lg:flex-row flex-col-reverse flex justify-center items-center'>
          <div className='text-center lg:text-left lg:w-6/8'>
            <p className='text-white font-bold opacity-50'>Welcome To</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white coolFont'>Hope Of Glory Ministries</h1>
            <p className='text-white font-bold py-4 max-w-[700px] '>
              sharing the transformative message of Jesus Christ worldwide. With unwavering dedication, the ministry spreads love, faith, and hope to all. Hope Of Glory Ministries resonates globally, offering a path to eternal glory through Christ's teachings.
            </p>
            {/* Button */}
            <br></br>
            <div className="flex justify-end"> {/* Use flex justify-end to push the button to the right */}
              <button className='text-black group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#ccd6f6] hover:border-[#ccd6f6] bg-white bg-opacity-80 rounded-lg'>
                <Link to="work" spy={true} smooth={true} duration={500}>
                  Read My Testimony
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
