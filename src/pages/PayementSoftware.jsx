import React from 'react'
import { FaCircle } from "react-icons/fa";
import qr from '../assets/qr.jpeg'
import './paymentCss.css'
// import bgImage from ''
const PayementSoftware = () => {
  return (
    < div className="bgImage flex flex-col">
     <p className='w-4/5 mx-auto text-center text-2xl font-bold italic mt-9'>Instruction: Share the screenshot after completion of payment in Telegram to <a href="https://t.me/devansh2202" target="_blank"><span className='underline text-[#4952fb]'>@devansh2202</span></a> with your active Telegram ID.</p>
    <div className='flex mx-auto items-center justify-center h-[100%] w-[100%]'>
        <div className='w-4/5 mx-auto flex md:flex-row flex-col-reverse items-center sm:gap-3 '>
            <div className='w-[50%] flex '>
                <div className='flex flex-col space-y-1  justify-center lg:pl-4'>
                  <h2 className='text-2xl font-bold '>Balaji SMC 3.0 Setup</h2>
                  <h4 className='text-xs  text-slate-600 font-medium'>By Balaji trading</h4>
                  <div className='pt-[30px] flex flex-col gap-4 '>
                        <p className='text-3xl'>What does this setup include?</p>
                        <div className='flex flex-col justify-between gap-1'>
                          <p className='text-sm flex items-center'><FaCircle className='h-2'/>Free Installation through anydesk with in a 3 days </p>
                          <p className='text-sm flex items-center'><FaCircle className='h-2'/> Free Videos in Hindi/English Both for how to use this setu. </p>
                          <p className='text-sm flex items-center'><FaCircle className='h-2'/> 3-4 Sureshot setups from which you can trade. </p>
                          <p className='text-sm flex items-center'><FaCircle className='h-2'/> You will be added to a dedicated software group where all updates will be posted.</p>
                        </div>
                        <div className='md:text-xs text-sm md:text-slate-600 text-slate-200 lg:pt-11'>
                            You are agree to pay &#8377;3500/- to buy this setup and money will not refunded in any case. <span className='text-red-600'>*</span>
                        </div>
                  </div>
                </div>
            </div>
              <div className='w-[50%] h-auto max-w-[100%] flex flex-col items-center justify-center'>
                <img src={qr} alt="" className='md:h-[30rem] ' />
                <p className='font-bold italic'>UPI ID: DEVANSH2202@YBL</p>
              </div>
        </div>
    </div>
    </div>
  )
}

export default PayementSoftware
