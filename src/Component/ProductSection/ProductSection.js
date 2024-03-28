import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'

const ProductSection = () => {
  return (
    <div>
      <div className='bg-black p-2 mt-4 rounded-md mx-auto w-[50%]'>
        <h2 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>
            SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className='grid grid-cols-3 justify-items-center py-8 mx-40'>
          {
            //lay 6 phan tu dau tien cua storeData va map()
            storeData.slice(0,6).map((product,index) => {
              console.log(product)
              return (
                <div key={index}>
                    <ProductSectionItem 
                        id = {product.id}
                        name = {product.name}
                        img = {product.img}
                        text = {product.text}
                        size = {product.size}
                        color = {product.color}
                        price = {product.price}
                        totalPrice= ""
                    />
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default ProductSection
