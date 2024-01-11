import React from 'react'
import {Fragment, useContext, useState} from 'react';
import { Dialog, DialogBody, Input } from '@material-tailwind/react';
import myContext from '../../context/data/myContext';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search(){
const [open, setOpen] = useState(false);
const handleOpen =()=>setOpen(!open)

const context = useContext(myContext);
const {mode}= context;

return(
  <Fragment>
  <div className='' onClick={handleOpen}>
    <AiOutlineSearch size={20} color='black'/>
  </div>
  <Dialog className='relative right-[1em] w-[25em] md:right-0 md:w-0 lg:right-0 lg:w-0' open={open} handler={handleOpen}>
   <DialogBody>
    <div className='flex w-full justify-center'>
     <Input/>
    </div>
   </DialogBody>
  </Dialog>
  </Fragment>
)
}

