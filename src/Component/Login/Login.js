import React ,{ useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from '../../featurs/slices/authSlices';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch()
    const intitalState = {
        name: "",
        password: "",
        image: ""
    };

    const [values,setValues] = useState(intitalState)

    const onChange = (name,value) => {
        setValues({...values, [name] : value})
    }

  return (
    <>
        <Card className="w-96 mx-auto my-[10%]">
            <CardHeader
                
                variant="gradient"
                
                className="mb-4 bg-gray-800 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                Sign In
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4 ">
                <Input  label= "Name" 
                        size="lg" 
                        type='text' 
                        name="name"
                        value={values.name}
                        onChange={(e) => onChange('name', e.target.value)}
                />
                <Input  label="Password" 
                        size="lg" type='password' 
                        name='password'
                        value={values.password}
                        onChange={(e) => onChange('password', e.target.value)}
                />
            </CardBody>
            <CardFooter className="pt-0 ">
                <Button onClick={() => dispatch(login(values))} variant="gradient" fullWidth className=' bg-gray-800 cursor-pointer border-none'>
                    Sign In
                </Button>
            </CardFooter>
        </Card>
    </>     
  )
}

export default Login
