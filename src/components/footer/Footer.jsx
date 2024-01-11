import React from 'react'
import { useContext } from 'react'
import myContext from '../../context/data/myContext'


function Footer() {
  const context= useContext(myContext);
  const {mode} = context

  return (
    <footer className='body-font'>
     Katha
    </footer>
  )
}

export default Footer