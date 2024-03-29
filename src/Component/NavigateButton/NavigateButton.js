import React from 'react'
import clothes from "../../assets/images/clothes.jpg"
import { filteredProduct } from '../../featurs/slices/prodcutSlices';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const NavigateButton = () => {

    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags"
    ];

    const dispath = useDispatch()
    
  return (
    <div>
        {/* -------------8-Button--------- */}
        <div className='flex items-center justify-center py-8'>
            {
                buttons.map((button, index) => (
                    
                    <div className='mr-4' key={index}>
                        <Link to={'/FilteredProduct/' + button}>
                            <button 
                                onClick={() => dispath(filteredProduct(button))}
                                className='bg-white cursor-pointer border-black w-24 h-10 rounded-xl text-black font-inter font-bold hover:bg-gray-300 duration-300 ease-in-out'
                            >
                                {button}    
                            </button> 
                        </Link>     
                    </div>
                ))
            }
        </div>
        {/* -----------Sale up to----------- */}
        <div className='bg-black p-2 rounded-md mx-auto w-[50%]'>
        <h3 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>
            SALES UP TO 50%
        </h3>
      </div>
        {/* -----------Clothes --------------*/}
        <div className='flex justify-center items-center py-4'>
            <img 
                className='w-[70%] h-[700px] first-letter rounded-md shadow-lg shadow-gray-600' 
                src={clothes}
                alt='clothes'
            >
            </img>
        </div>
    </div>
  )
}

export default NavigateButton
