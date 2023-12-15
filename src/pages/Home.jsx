import React from 'react';
import Typed from 'react-typed';
import Button from '../components/Button';
import pic1 from '../assets/Main.png';
import { Link as ScrollLink } from 'react-scroll';
import pic2 from '../assets/vecteezy_3d-business-money-saving-with-flying-coin-concept-icon-or-3d_10915815.png';
import pic3 from '../assets/vecteezy_analitics-3d-icon-illustration-for-your-website-user_9418807.png'
import "../index.css"
import pic4 from "../assets/jump_boy.png"
import pic5 from "../assets/For_responcive.png"
const Home = () => {
  const isSmallScreen = window.innerWidth <= 1300;
  return (
    <>
    <div className={`h-[50px] hidden md:block `}></div>
    <div className={`flex  md:flex-row  md:h-[100vh] w-11/12 mx-auto justify-center items-center max-w-7xl gap-y-2 flex-col-reverse `} id="home">
      <div className='w-[60%] flex flex-col gap-y-5 md:gap-y-8'>
        <h1 className='flex flex-col md:flex-row items-center text-[37px] md:text-[55px] font-bold md:font-[800]'>
          <span className='text-purple-500 font-rubik'>Trade &nbsp;</span>
          <Typed
            strings={[
                " with BalaJi Trading",
                " by SMC Software",
            ]}
            typeSpeed={100}
            backSpeed={80}
            backDelay={100}
            loop
          />
        </h1>
        <p className='font-rubik text-xl text-center md:text-justify font-thin'>
          Master Strategic Market Craftsmanship with <br/> our expert courses and cutting-edge software
        </p>
        <div className='flex justify-center md:justify-start md:items-center gap-4'>
          <Button active={true} linkto={'https://t.me/+mrgTcGb6dNIyMWQ9'}>Join us</Button>
          <Button active={false} linkto={'https://www.youtube.com/channel/UCgNzXDnv71FTbfaVqhaXPKg'}>Watch Videos</Button>
        </div>
      </div>


      {/* Next section   */}



      <div className='w-[100%] md:w-[45%] relative ml-4'>

          <img src={pic1} alt="" className=' w-[63rem] md:w-full h-[33rem] md:h-[34rem]' />
          <img src={pic2} alt="" className='h-[8rem] absolute top-8 right-[7.375rem] -rotate-6 animate-boy-animation hidden md:block' />
          <img src={pic3} alt="" className='h-[4rem] absolute top-[10.75rem] left-[6.938rem] -rotate-6 animate-boy-animation hidden md:block' />
          <img src={pic4} alt="" className='h-[15rem] absolute top-[4.75rem] left-[8.338rem] -rotate-6 animate-bounce-slow hidden md:block' />
      </div>
    </div>
    </>
  );
};

export default Home;
