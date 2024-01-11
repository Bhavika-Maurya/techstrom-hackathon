import React from 'react'
import { Navbar, Typography, IconButton, Avatar, Collapse } from '@material-tailwind/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShareAlt,AiOutlineSearch} from 'react-icons/ai'
import myContext from "../../context/data/myContext"
import Search from '../search/search'

export default function Nav(){
  const [openNav, setOpenNav]= React.useState(false);

  const context = useContext(myContext);
  const {mode, toggleMode}= context;

  const admin = localStorage.getItem('admin')

  const navList =(
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
       <Typography 
       as="li"
       variant='small'
       color='black'
       className='p-1 font-normal'
       style={{color: mode=== 'dark' ? 'white': 'white'}}
       >
        <Link to ={'/'} className='flex items-center'>Home</Link>
       </Typography>
       <Typography
       as="li"
       variant='small'
       color='black'
       className='p-1 font-normal'
       style={{color: mode=== 'dark' ? 'white': 'white'}}
       >
       <Link to ={'/allBlogs'} className='flex items-center'>Blogs</Link>
       </Typography>
       <Typography
       as="li"
       variant='small'
       color='black'
       className='p-1 font-normal'
       style={{color: mode=== 'dark' ? 'white': 'white'}}
       >
        <Link to ={'/adminLogin'} className='flex items-center'>Admin Login</Link>
       </Typography>
    </ul>
  );

  return (
    <>
    <Navbar className='sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2' style={{background:mode ==='dark'?'rgb(30, 41, 59)': 'orange'}} >
    <div className='flex items-center justify-between text-black-900'>
    <Link to= {'/'}>
      <Typography
      as= "a"
      className=''
      style={{}}
      >
        <img className='' src=''/>
        <span>Katha</span>
      </Typography>
    </Link>

    <div className='flex items-center gap-4'>
    <div className='hidden lg:block'>
      {navList}
    </div>

    <div>
      <Search/>
    </div>

    <div>
      <AiOutlineShareAlt size={20} color='white'/>
    </div>

  <div>
    <Link to={'/adminDashboard'}>
      <div className=''>
      <Avatar 
      key={1}
      src={''}
      alt='avatar'
      withBorder={true}
      className='p-0.5 text-red-500 w-10 h-10'
      style={{
        border: 
        mode === 'dark' ? '2px solid rgb(226, 230, 234)':'2px solid rgb(30, 41, 59)'
      }}
      />
      </div>
    </Link>
  </div>

    </div>
    </div>
    </Navbar>
    </>
  );

}