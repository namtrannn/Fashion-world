import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import Cart from '../Cart/Cart'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../../featurs/slices/authSlices'
const Navbar = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    const dispatch = useDispatch()
    
    const [open, setOpen] = useState(false)
    
    const handelOpen = () => {
        setOpen(true)
    }

  return (
   <>
        <div>
            <div className='w-full bg-black p-2'>
                <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>
                    FASHION WORLD
                </h3>
            </div>
        </div>
        <div className='flex justify-around items-center'>
            <div>
                <img className='h-28 w-full' src={logo} alt="store"></img>
            </div>
            <div className='flex justify-around items-center'>
                <button 
                    onClick={() => dispatch(logout())}
                    className= 'cursor-pointer font-inter text-base font-medium tracking-normal leading-none text-center mr-4 bg-white border-none'
                >
                    Log out
                </button>
                <div className='flex flex-row items-center'>
                    <svg    
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="#000" 
                        className="w-6 h-6">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
                        />
                    </svg>
                    <p className='font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
                        Whish Lish
                    </p>
                </div>
                <div className='flex flex-row items-center cursor-pointer' 
                     onClick={handelOpen}
                >
                    {
                        totalAmount > 0 ? (
                            <span className='rounded-full bg-gray-300 px-2 font-inter mr-1 text-sm'>
                                {totalAmount}
                            </span>
                        ) :
                        (
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="#000" 
                                className="w-6 h-6">
                                <path  
                                    strokeLinejoin="round" 
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                                />
                            </svg>
                        )
                    }
                    
                    <p className='font-inter text-base font-medium tracking-normal leading-none text-center'>
                        Shopping bag    
                    </p>
                    <div>
                        {
                           open && <Cart openModal = {open} setOpen={setOpen}/>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-black flex p-4 w-full justify-around'>
            <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'> 
                50% & OFF
            </div>
            <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'> 
                Free shipping and returns
            </div>
            <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'> 
                Diffrent payment methods
            </div>
        </div>
   </>  
  )
}

export default Navbar
