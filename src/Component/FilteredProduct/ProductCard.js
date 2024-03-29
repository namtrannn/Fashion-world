import React from 'react'
import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography, 
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import {Link, useParams} from "react-router-dom"
import { singleProduct } from '../../featurs/slices/prodcutSlices';

const ProductCard = ({ id , name, img ,text, price , color }) => {
  const dispatch = useDispatch()
  const { type } = useParams()

  return (
    <Link to={`/FilteredProduct/${type}/`+id}  className="no-underline text-black font-inter">
      <div className="m-4 shadow-xl rounded-lg" onClick={() => dispatch(singleProduct(id))}>
          <CardHeader color="blue" className="relative  h-96">
              <img src={img} alt="img-blur-shadow" className="h-full w-full rounded-md cursor-pointer" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="my-4">
                {name}
              </Typography>
              <Typography>{text}</Typography>
              
            </CardBody>
            <hr className='h-px w-full mt-2 bg-gray-600 opacity-50 outline-none border-none'></hr>  
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">{price}$</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                {color.map((color, index) => {
                  return (
                    <i
                      className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                      key={index}
                      style={{ backgroundColor: color }}
                    ></i>
                  );
                })}
              </Typography>
            </CardFooter>
      </div>
    </Link>
  )
}

export default ProductCard
