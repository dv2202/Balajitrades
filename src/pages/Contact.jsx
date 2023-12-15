import React from 'react'
import svg_img from "../assets/light_grey_dots_background.jpg"
import { Link } from 'react-router-dom'
import telegram from '../assets/telegram.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/insta.png'
const Contact = () => {
  return (
    <div className='pb-[10rem]'>
        <div className='w-100% relative flex flex-col h-[100px]' id="contact">
          <div className='absolute h-auto right-0 w-full '>
            <div className='h-[2px] w-[70%] ml-auto items-end mt-28 bg-slate-200'></div>
          </div>
        </div>
        <div className='mt-20 w-11/12 flex flex-col md:space-y-20'>
            <div className='font-bold w-full text-black text-6xl font-sans mx-auto text-center'>
              Join Our Trading Community 
              <p className='text-slate-400 flex font-medium justify-center items-center text-2xl pt-4'>Connect with like-minded traders and explore opportunities<br/>Stay updated with market trends and insights.</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center md:space-x-[80px] '>
                <div className='flex flex-col items-center justify-center'>
                    <Link
                          to="https://t.me/+mrgTcGb6dNIyMWQ9">
                          <img src={telegram} alt="" className='h-[120px]  w-[120px] transition duration-150 ease-out hover:scale-110'/>
                    </Link>
                    <Link to={'https://t.me/+mrgTcGb6dNIyMWQ9'}>
                        <p className='text-cyan-500 transition duration-150 ease-out hover:scale-110 underline text-[26px] font-extrabold'>Telegram</p>
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Link
                          to="https://t.me/+mrgTcGb6dNIyMWQ9">
                          <img src={youtube} alt="" className='h-[120px]  w-[120px] transition duration-150 ease-out hover:scale-110'/>
                    </Link>
                    <Link to={'https://t.me/+mrgTcGb6dNIyMWQ9'}>
                        <p className='text-red-500 transition duration-150 ease-out hover:scale-110 underline text-[26px] font-extrabold'>Youtube</p>
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Link
                          to="https://t.me/+mrgTcGb6dNIyMWQ9">
                          <img src={instagram} alt="" className='h-[120px]  w-[120px] transition duration-150 ease-out hover:scale-110'/>
                    </Link>
                    <Link to={'https://t.me/+mrgTcGb6dNIyMWQ9'}>
                        <p className='text-[#F6AB48] transition duration-150 ease-out hover:scale-110 underline text-[26px] font-extrabold'>Instagram</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
