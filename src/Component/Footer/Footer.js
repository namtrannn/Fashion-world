import React from 'react'
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <hr className='h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none'></hr>
        </div>
        <div className='flex items-center justify-around'>
            <div> 
                <img className='h-30'  src={logo} alt='logo'/>
            </div>
            <div>   
                <p
                    className='text-black text-md font-inter no-underline normal-case'
                >
                    Gmail: tranquocnamyb2001@gmail.com
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
