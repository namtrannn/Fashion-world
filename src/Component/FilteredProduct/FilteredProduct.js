import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from '../Error/Error';
import {
  filteredProduct,
  filterGender, 
  sortByPrice,
  filterByColor,
  filterBySize
} from "../../featurs/slices/prodcutSlices"

const FilteredProduct = () => {

    const products = useSelector((state) => state.products.filteredProduct)
    const {type} = useParams()
    const dispatch = useDispatch()
    const err = useSelector((state) => state.products.error)

    const genderButtons = ["male", "female"]
    const colorButtons = ["red","green","purple","yellow","orange","blue","black","brown"]
    const sizeButtons = ["S","M", "L","XL"]

  return (
    <div>
        <div className='pt-16'>
            <div className='px-14 '>
                <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>
                    {type}  
                </h1>
                <hr className='h-px w-full mt-4 bg-gray-600 opacity-50 outline-none border-none'></hr> 
                <div className='flex items-center justify-between py-8'>
                    <div className='flex items-center'>
                        {
                          // ---------Filter gender-------
                          genderButtons.map((item,index) => {
                              return (
                                <div> 
                                    <Button
                                        size='md'
                                        variant='outlined'
                                        ripple={true}
                                        className='text-black bg-gray-50 hover:bg-gray-300 duration-300 mr-4 ease-in-out cursor-pointer'
                                        onClick={() => dispatch(filterGender(item))}
                                    >
                                        {item}
                                    </Button>
                                </div>
                              )
                           
                          })
                        }
                        {/* ------------High price-------- */}
                        <Button
                             size='md'
                             variant='outlined'
                             ripple={true}
                             className='text-black bg-gray-50 hover:bg-gray-300 duration-300 mr-4 ease-in-out cursor-pointer'
                             onClick={() => dispatch(sortByPrice())}
                        >
                            High Price
                        </Button>
                        {/*------------color btn---------- */}
                        <Menu>
                            <MenuHandler>
                              <Button
                                  size='md'
                                  variant='outlined'
                                  ripple={true}
                                  className='text-black bg-gray-50 hover:bg-gray-300 duration-300 mr-4 ease-in-out cursor-pointer'
                              >
                                  Select a Color
                              </Button>
                            </MenuHandler>
                            <MenuList>
                                {
                                  colorButtons.map((item,index) => {
                                    return(
                                      <MenuItem className='bg-white border-none my-1 shadow-sm' 
                                                style={{color: item}} 
                                                key={index}
                                                onClick={() => dispatch(filterByColor(item))}
                                      >
                                          {item}
                                      </MenuItem>
                                    )
                                  })
                                }
                            </MenuList>
                        </Menu>
                        {/* ------------Size-btn------------ */}
                        <Menu>
                            <MenuHandler>
                              <Button
                                  size='md'
                                  variant='outlined'
                                  ripple={true}
                                  className='text-black bg-gray-50 hover:bg-gray-300 duration-300 mr-4 ease-in-out cursor-pointer'
                              >
                                  Select a Size
                              </Button>
                            </MenuHandler>
                            <MenuList>
                                {
                                  sizeButtons.map((item,index) => {
                                    return(
                                      <MenuItem className='bg-white border-none my-1 shadow-sm' 
                                                key={index}
                                                onClick={() => dispatch(filterBySize(item))}
                                      >
                                          {item}
                                      </MenuItem>
                                    )
                                  })
                                }
                            </MenuList>
                        </Menu>
                    </div>
                    {/* Clear filter btn */}
                    <div className='pr-1'>
                      <Button
                          size='md'
                          variant='outlined'
                          ripple={true}
                          className='text-black bg-gray-50 hover:bg-gray-300 duration-300 mr-4 ease-in-out cursor-pointer'
                          onClick={() => dispatch(filteredProduct(type))}
                      >
                          Clear filter
                      </Button>
                    </div>
                </div>
            </div>
            {
              err ? (<Error /> )
                  : (<div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
                        {//loc san pham theo thuoc tinh type
                          //.filter((product) => product.type === type)
                          
                          //hien thi cac san pham vua loc ra UI 
                          products.map((product,index) => {
                            return (
                              <div key={index}>
                                  <ProductCard
                                      id = {product.id}
                                      name = {product.name}
                                      text = {product.text}
                                      img = {product.img}
                                      price = {product.price}
                                      color = {product.color}
                                  >
                                  </ProductCard>
                              </div>
                            )
                          })
                        }
                    </div>)
            }
        </div>
      
    </div>
  )
}

export default FilteredProduct
