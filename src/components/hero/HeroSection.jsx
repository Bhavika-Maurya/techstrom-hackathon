import { Typography } from '@material-tailwind/react' 
import React from 'react'
import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import '../../App.css'


function HeroSection() {

  const context= useContext(myContext);
  const {mode} = context
  return (
   <section style={{backgroud: mode ==='dark'? 'rgb(30, 41, 59)':'#BA2F16' }}>
   <div className='container max-auto flex px-5 py-24 items-center justify-center flex-col'>
    <main>
    <div className='text-center'>
      <div className='mb-2'>
      <div className='flex justify-center'>
   <img src="" alt=""/>
      </div>
      </div>
      <div className="newfont">
      <h1 className='text-3xl text font-bold' text-color='#BA2F16'>Katha</h1>
      <p style={{}} className='sm:text-3xl text-xl font-extralight sm:mx-auto'>
      Chronicles of Culture
        </p>
        </div>
    </div>
    </main>
   </div>
   </section>
  )
}

export default HeroSection