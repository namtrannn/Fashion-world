import React from "react";
import {
    Card,
    CardBody,
    Typography,
    Button,
    CardFooter,
    Tooltip,
  } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../featurs/slices/cartSlices";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <>
    <div className="shadow-xl mb-6 rounded-lg">
      <Card  className="w-[300px] relative  rounded-lg ">
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-6 right-4 z-10 text-red-700"
        >
          SALE% 
        </Typography>
        <div className="p-1">
          <img className="h-[350px] w-[100%] shadow-2xl rounded-lg" src={img} alt={name} />
        </div>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2 text-black ">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium font-inter text-gray-400 " textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="red" className="font-medium text-gray-400  pl-2" textGradient>
              Size:{" "}
              <span className="text-gray-400 text-base font-extralight">
                {defaultSize}
              </span>
            </Typography>
            <Typography className="text-gray-400 font-medium pr-2" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Add to Cart" placement="bottom" className="bg-blue-600 p-1 font-inter">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice, 
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              className="p-2 font-inter text-gray-400  text-xs mb-4 cursor-pointer border-gray-500"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
    </>
  );
};

export default ProductSectionItem;