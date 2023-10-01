import React from 'react';
import { FaPaypal } from 'react-icons/fa';
import { TbBrandCashapp , TbCreditCard } from 'react-icons/tb';
import { SiZelle } from 'react-icons/si';
import dimaNadia from '../hogassets/22612176-1BAE-44D8-B2A9-AFA96ED77166.jpeg';
import ChangingWord from './ChangingWord';

const Give = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dimaNadia})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div name='Give' className="w-full h-screen" style={backgroundStyle}>
      <div className="flex justify-center items-center text-white h-screen">
        <div className="p-8 bg-[rgba(0, 0, 0, 0.5)] rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            {/* Question and Changing Word */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl z-2 opacity-50 md:text-left md:text-1xl font-bold md:mb-4">Want to help us reach places like</h2>
              <ChangingWord />
            </div>

            {/* Icons with toggleable text */}
            <div className="col-span-2 md:col-span-1">
              <div className="space-y-4 md:space-y-0 md:flex lg:items-left md:flex-col xs:items-center md:items-center md:space-x-4">
                <div className="flex items-center pb-1 space-x-4">
                  <a href="https://enroll.zellepay.com/qr-codes?data=ewogICJ0b2tlbiIgOiAiaG9wZW9mZ2xvcnloYXJ2ZXN0QGdtYWlsLmNvbSIsCiAgIm5hbWUiIDogIkRNSVRSSVkiLAogICJhY3Rpb24iIDogInBheW1lbnQiCn0="><SiZelle className="text-4xl text-blue-500 hover:opacity-70 cursor-pointer" /></a><span className='font-semibold'>Zelle</span>
                </div>
                <div className="flex items-center pb-1 space-x-4">
                  <TbBrandCashapp className="text-4xl hover:opacity-70 text-green-500" />
                  <span className='font-semibold'>CashApp</span>
                </div>
                <div className="flex items-center pb-1 space-x-4">
                <a href="https://www.paypal.com/donate?hosted_button_id=YDZPDFZ8XYTCW"><FaPaypal className="text-4xl text-blue-700 hover:opacity-70 cursor-pointer" /></a>
                  <span className='font-semibold'>PayPal</span>
                </div>
                
                <div className="flex items-center pb-1 space-x-4">
                <form action="http://localhost:3001/" method="POST">
                  <button type="submit"><TbCreditCard className="text-4xl text-gray hover:opacity-70 cursor-pointer" /></button>
                </form>
                  <span className='font-semibold'>Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;
