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
                                className='bg-white cursor-pointer border-green-300 w-24 h-10 rounded-xl text-green-700 font-inter font-bold hover:bg-green-300 duration-300 ease-in-out'
                            >
                                {button}
                            </button> 
                        </Link>     
                    </div>
                ))
            }
        </div>
        {/* -----------Sale up to----------- */}
        <div className='bg-green-300 p-2 w-[55%] mx-auto rounded-md'>
            <h3 className='text-orange-900 font-inter font-bold text-lg text-center tracking-normal leading-none'>SALES UP TO 50%</h3>
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
