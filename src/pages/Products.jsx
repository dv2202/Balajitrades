import React from 'react'
import temp_img from '../assets/animation.png'
import Button from '../components/Button'
import { MdCircle } from "react-icons/md";
import { Link } from 'react-scroll';

const Products = () => {
  return (
    <div id='product' className='bg-[#f8f8fa] lg:flex lg:flex-col lg:items-center lg:justify-center h-screen'>
    <div className='text-purple-500 mx-auto text-3xl font-semibold pt-6 text-center'>Course and Software</div>
      <div className=' flex flex-col sm:flex-col gap-y-10 md:flex-row rounded-xl gap-x-10 justify-center items-center mx-auto  pt-10 pb-10'>

            <div className="w-[338px] bg-white border border-gray-200 rounded-lg shadow transition duration-150 ease-out hover:scale-105">
            <a href="#">
                <img className="rounded-t-lg h-[200px] w-full" src={temp_img} alt=""/>
            </a>
            <div className="p-5 flex gap-y-2 flex-col">
                <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900">
                    Balaji SMC 3.0 Software 
                </h5>
                <h6 className='font-extrabold text-lg  flex flex-row gap-x-2 items-center '>&#8377;4000/- <span className='line-through font-normal'>&#8377;8000/-</span><div className='bg-green-400 font-bold text-sm text-white rounded-md px-2 py-1'>50% off</div></h6>
                <Button active="true" linkto="/payment">Buy Now</Button>
                
                <p className="font-bold text-xl text-gray-700 ">
                    This software includes :
                </p>
                <div className='flex flex-col gap-y-1'>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row items-center ">
                        <MdCircle className='h-3 w-3'/><span>&nbsp;24/7 Forex market chart</span>s
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row  ">
                        <MdCircle className='h-3 w-3 mt-1'/><span>&nbsp;Automatic demand/supply zone for SMC &nbsp;trade</span>
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row items-center ">
                        <MdCircle className='h-3 w-3'/><span>&nbsp;Automatic SNR for SMC trade</span>s
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row items-center ">
                        <MdCircle className='h-3 w-3'/><span>&nbsp;Automatic SMC Trade Alert</span>s
                    </p>
                </div>
            </div>
            </div>

            <div className="w-[338px] bg-white  border border-gray-200 rounded-lg shadow transition duration-150 ease-out hover:scale-105 ">
            <a href="#">
                <img className="rounded-t-lg h-[200px] w-full" src={temp_img} alt=""/>
            </a>
            <div className="p-5 flex gap-y-2 flex-col">
                <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900">
                     SMC Master MentorShip
                </h5>
                <h6 className='font-extrabold text-lg  flex flex-row gap-x-2 items-center '>&#8377;5000/- </h6>
                <Button active="true" linkto="/payment">Comming Soon</Button>
                
                <p className="font-bold text-xl text-gray-700 ">
                    This course includes :
                </p>
                <div>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row items-center ">
                        <MdCircle className='h-3 w-3'/><span>&nbsp;Hack to take News Trade</span>s
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row items-center ">
                        <MdCircle className='h-3 w-3'/><span>&nbsp;Sureshot Concepts</span>
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row items-center ">
                        <MdCircle className='h-3 w-3'/><span>&nbsp;Software and Money Managment sheet free</span>
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-700 flex flex-row items-center ">
                        <MdCircle className='h-3 w-3'/><span>&nbsp;Live Doubt Solving and Trading</span>s
                    </p>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Products
