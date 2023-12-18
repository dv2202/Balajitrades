import React from 'react';
import instructor from '../assets/Profile.png';
import { TiTick } from "react-icons/ti";
import './About.css'
const About = () => {
  return (
    <div id="about" className=" bg-cover bg-center lg:flex lg:flex-col lg:items-center lg:justify-center md:h-screen mb-10 md:mb-0mt-10 relative">
       
      <div className='w-11/12 flex mx-auto'>
        <h1 className='text-[50px] mt-5 font-bold'>Meet Your <span className='text-purple-500'>Instructor</span></h1>
      </div>

      <div className='h-[2px] mx-auto bg-slate-500 w-11/12 mt-5'></div>
      <div className='w-11/12 mx-auto mt-10 flex flex-col flex-wrap items-center justify-center gap-y-10 gap-x-5'>
        <div className='mx-auto w-11/12 flex flex-col justify-center items-center'>
          <img src={instructor} alt="" className='h-[250px] w-[250px]' />
          <h2 className='text-[22px] font-bold text-purple-500'>Devansh Vishwakarma</h2>
          <h3 className='text-[15px] font-medium text-slate-500 mb-3'>Founder,Balaji Trading</h3>
        </div>
        <div className='flex justify-center text-center items-center flex-col  gap-y-2'>
          <p className='font-xl mb-4'>Devansh Vishwakarma, with a robust four-year background in trading, is the proud owner of Balaji Trading. His journey in the financial markets has been shaped by hands-on experience and dedicated practice with SMC. Devansh brings a wealth of expertise to his role, demonstrating a deep understanding of market dynamics. As the driving force behind Balaji Trading, he combines analytical prowess with a passion for helping others navigate the complexities of the financial world. Devansh is committed to excellence, fostering a client-centric approach to trading and investment.</p>
          <div className='flex flex-row gap-x-4'>
            <div className=' items-center text-center flex flex-row gap-x-1'>
              <TiTick className='bg-purple-500 h-4 w-fit text-white rounded-full' />
              <p className='text-slate-500 text-sm '>1600+ Members</p>
            </div>
            <div className=' items-center text-center flex flex-row gap-x-1'>
              <TiTick className='bg-purple-500 h-4 w-fit text-white rounded-full' />
              <p className='text-slate-500 text-sm '>SMC Software</p>
            </div>
            <div className=' items-center text-center flex flex-row gap-x-1'>
              <TiTick className='bg-purple-500 h-4 w-fit text-white rounded-full' />
              <p className='text-slate-500 text-sm '>Above 80% News Trade Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
