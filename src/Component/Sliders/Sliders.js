import React from 'react'
import { prevSlider, nextSlider , dotSlider} from "../../featurs/slices/sliderSlices"
import { useSelector, useDispatch } from 'react-redux'
import { sliderData } from '../../assets/data/dummyData'
 
function Sliders() {
    const slideIndex = useSelector((state) => state.slider.value);
    
    const dispatch = useDispatch();

    return (
        <div className='relative pb-4'>
            <div className='w-full'>
                {sliderData.map((item, index) => (
                    <div
                        key={item.id}
                        className={
                            parseInt(item.id) === slideIndex
                                ? "opacity-100 duration-700 ease-in-out scale-100"
                                : "opacity-0 duration-700 ease-in-out scale-95"
                        }
                    >
                        <div>
                            {parseInt(item.id) === slideIndex && (
                                <img className='w-full h-[850px]' src={item.img} alt="shoes" />
                            )}
                        </div>
                        <div className='absolute w-full top-44 mx-auto inset-x-1/4'>
                            <p className='text-white text-4xl font-inter font-bold tracking-normal leading-none'>
                                {parseInt(item.id) === slideIndex && item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex absolute bottom-12 left-[45%]'>
                {sliderData.map((dot,index) => {
                    return (
                        <div className='mr-4' key={dot.id}>
                        <div
                            className={
                                index === slideIndex
                                    ? "bg-green-500 rounded-full p-4 cursor-pointer"
                                    : "bg-white rounded-full p-4 cursor-pointer"
                            }
                            onClick={() => dispatch(dotSlider(index))}
                        ></div>
                    </div>
                    )
                }
            )}
            </div>
            <button 
                onClick={() => dispatch(nextSlider(slideIndex + 1))}
                className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300' 
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button 
                onClick={() => dispatch(prevSlider(slideIndex - 1))}
                className='absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300' 
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-5 h-5">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>
        </div>
    );
}

export default Sliders
