import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const FilteredProduct = () => {

    const products = useSelector((state) => state.products.filteredProduct)
    const {type} = useParams()
    
  return (
    <div>
        <div className='pt-16'>
            <div className='pl-14'>
                <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>
                    {type}
                </h1>
            </div>
            <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
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
            </div>
        </div>
      
    </div>
  )
}

export default FilteredProduct
