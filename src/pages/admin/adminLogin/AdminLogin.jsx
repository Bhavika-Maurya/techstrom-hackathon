import React from 'react'
import {useState, useContext} from 'react'
import {Card, CardHeader, CardBody, Input, Button, Typography} from '@material-tailwind/react'
import myContext from '../../../context/data/myContext'

export default function AdminLogin(){
  const context = useContext(myContext);
  const {mode}= context;

  return(
    <div className='flex justify-center items-center h-screen'>
      <Card className='w-full max-w-[24rem]'>
      <CardHeader color='orange' floated={false} shadow={false} className='m-0 grid place-items-center rounded-b-none py-8 px-4 text-center'>
     <div className='mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white'>
      <div className='flex justify-center'>
        <img src={'src/assets/tree-736885_1280 (1).jpg'} className='h-20 w-20'/>
      </div>
     </div>
     <Typography variant="h4">
     Admin Login
     </Typography>
      </CardHeader>
      <CardBody>
        <form className=' flex flex-col gap-4'>
          <div>
           <Input type='email' label='Email' name='email'/>
          </div>
          <div>
           <Input type='password' label='Password' />
          </div>
          <Button>
            Login
          </Button>
        </form>
      </CardBody>
      </Card>
    </div>
  );
}