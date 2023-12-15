import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({children,active,linkto}) => {
  return (
    <Link to={linkto}>
    <div className={`text-center px-[24px] py-[12px] rounded-md font-medium  h-auto md:h-[48px] font-inter text-[16px] 
        ${active ? "bg-purple-500  text-white ": "bg-richblack-800 border text-black border-purple-500" } 
        hover:scale-95 transition-all duration-200`}>
            {children}
    </div>
    </Link>
  )
}

export default Button
