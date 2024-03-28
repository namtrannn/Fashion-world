import React from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../featurs/slices/cartSlices";

const Cart = ( { openModal, setOpen }) => {
  
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
 
  return ( 
    <div>
      {
        cart.length > 0 ?(
          <Dialog 
            className="border-0 outline-0 w-[600px] min-[400px] mx-auto my-[150px]" 
            open={openModal} 
            handler={() => setOpen(false)}
          >
            <div className="flex flex-col text-2xl m-4 font-inter font-bold justify-center items-start">
                Shopping Bag
                <hr className='h-px w-full mr-auto mt-2 bg-gray-600 opacity-50 outline-none border-none'></hr>    
            </div>
            <DialogBody>
                {
                  cart.map((product,index) => {
                    return (
                      <div key={index} className="grid grid-cols-2 py-4">
                          <div>
                              <img 
                                  src={product.img} 
                                  alt={product.name}
                                  className="h-[125px] rounded-md"
                              >    
                              </img>
                              <div className="flex flex-col items-start">
                                <h4 className="text-black font-inter font-bold text-base tracking-normal leading-none pt-2">
                                  {product.name}
                                </h4>
                              </div>
                              <div className="max-w-xs">
                                <p className="text-black font-inter text-sm tracking-normal leading-none pt-2">
                                  {product.text}
                                </p>
                              </div>
                          </div>
                          <div className="px-auto">
                            <p className="text-black font-inter text-sm tracking-normal leading-1 pl-2">
                                Select Size : {" "}
                                <span className="ml-2">{product.size}</span>
                            </p>
                            <p className="text-black font-inter text-sm tracking-normal leading-1 pl-2">
                                Select Color : {""}
                                <span className="rounded-full ml-2 px-2"
                                style={{backgroundColor: product.color}}
                                ></span>
                            </p>
                            <p className="text-black font-inter text-sm tracking-normal leading-1 pl-2">
                                Amount: <span className="ml-2">{product.amount}</span>
                            </p>
                            <p className="text-black font-inter text-sm tracking-normal leading-1 pl-2">
                                Single Item Price: <span className="ml-2">{product.price}$</span>
                            </p>
                            <p className="text-black font-inter text-sm tracking-normal leading-1 pl-2">
                                Total Item Price: <span className="ml-2">{product.totalPrice}</span>
                            </p>
                            <div className="pt-4">
                              <Tooltip
                                  content="Remove from the Cart"
                                  placement="bottom"
                              >
                                  <Button
                                      className="cursor-pointer bg-black"
                                      size="sm"
                                      ripple={true}
                                      variant="filled"
                                      onClick={() => dispatch(removeFromCart(product))}
                                  >
                                      Remove
                                  </Button>
                              </Tooltip>
                            </div>
                          </div>
                      </div>
                    )
                  })
                }
            </DialogBody>
            <DialogFooter className="flex justify-center items-center">
                <p className="text-black font-inter font-bold text-base tracking-normal leading-1 pt-2">
                    Total Price of ALL Products: {" "}
                    <span className="ml-2">{totalPrice}$</span>
                </p>
            </DialogFooter> 
          </Dialog>
        ) :
        (
          <Dialog 
            className="border-0 outline-0 w-[600px] min-[400px] mx-auto my-[150px]" 
            open={openModal} 
            handler={() => setOpen(false)}
            animate={{
              mount: {scale: 1, y: 0},
              unmount: {scale: 0.9, y: -100}
            }}
          > 
            <div className="flex flex-col text-2xl m-4 font-inter font-bold justify-center items-start">
                Shopping Bag
                <hr className='h-px w-full mt-2 bg-gray-600 opacity-50 outline-none border-none'></hr>    
            </div>
            <DialogBody>
                <div>
                  <h1 className="font-inter font-bold text-2xl text-black py-2 tracking-normal leading-none">
                      Your bag is empty
                  </h1>
                  <p className="font-inter  text-base text-black py-2 tracking-normal leading-none">Add some products</p>
                </div>
            </DialogBody>
        </Dialog>
        )
      }
    </div>
  )
}

export default Cart
