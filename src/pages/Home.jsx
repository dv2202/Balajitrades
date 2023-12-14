import React from 'react';
import Typed from 'react-typed';
import Button from '../components/Button';
import pic1 from '../assets/Main.png';
import { Link as ScrollLink } from 'react-scroll';
import pic2 from '../assets/vecteezy_3d-business-money-saving-with-flying-coin-concept-icon-or-3d_10915815.png';
import pic3 from '../assets/vecteezy_analitics-3d-icon-illustration-for-your-website-user_9418807.png'
import "../index.css"
import pic4 from "../assets/jump_boy.png"
const Home = () => {
  return (
    <div className='flex w-11/12 mx-auto justify-center items-center  max-w-7xl '>
      <div className='w-[60%] flex flex-col gap-y-8'>
        <h1 className='flex items-center text-[55px] font-[800]'>
          <span className='text-purple-500 font-rubik'>{`Trade `}</span>
          <Typed
            strings={[
                "\u00A0with BalaJi Trading",
                "\u00A0by SMC Software",
            ]}
            typeSpeed={100}
            backSpeed={80}
            backDelay={100}
            loop
          />
        </h1>
        <p className='font-rubik text-xl justify font-thin'>
          Master Strategic Market Craftsmanship with <br/> our expert courses and cutting-edge software
        </p>
        <div className='flex items-center gap-4'>
          <Button active={true} linkto={'https://www.google.com'}>Join us</Button>
          <Button active={false} linkto={'https://www.youtube.com/channel/UCgNzXDnv71FTbfaVqhaXPKg'}>Watch Videos</Button>
        </div>
      </div>


      {/* Next section   */}



      <div className='w-[45%] relative ml-4'>
        <img src={pic1} alt="" className='h-[34rem] ' />
        <img src={pic2} alt="" className='h-[8rem] absolute top-8 right-[7.375rem] -rotate-6 animate-boy-animation' />
        <img src={pic3} alt="" className='h-[4rem] absolute top-[10.75rem] left-[6.938rem] -rotate-6 animate-boy-animation' />
        <img src={pic4} alt="" className='h-[15rem] absolute top-[4.75rem] left-[8.338rem] -rotate-6 animate-bounce-slow' />
      </div>
    </div>
    
  );
};

export default Home;
