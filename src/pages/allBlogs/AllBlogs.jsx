import React from 'react'
import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'

function AllBlogs() {

  const context = useContext(myContext);
  const {mode}= context;

  return (
    <Layout>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-10 mx-auto max-w-7xl'>
          <div className='mb-5'>
            <h1 className='text-center text-2xl font-bold'>All Blogs</h1>
          </div>
          <div className='flex flex-wrap justify-center -m-4 mb-5'>
            {/* card 1*/}
      <div className='p-4 md:w-1/3'>
        <div className=''>
         <img className='w-full' src={'src/assets/tree-736885_1280 (1).jpg'}/>
         <div className='p-6'>
         <h2 className='tracking-widset text-x5 title-font font-medium text-gray-400 mb-1'>
          {'11 jan 2024'}
         </h2>
          <h1 className='title-font text-lg font-bold text-gray-900 mb-3'>{'Culture of india'}</h1>
          <p>india is veru rich culturalral heritage etc.</p>
         </div>
        </div> 
      </div>

  {/* card 2*/}
  <div className='p-4 md:w-1/3'>
        <div className=''>
         <img className='w-full' src={'src/assets/tree-736885_1280 (1).jpg'}/>
         <div className='p-6'>
         <h2 className='tracking-widset text-x5 title-font font-medium text-gray-400 mb-1'>
          {'11 jan 2024'}
         </h2>
          <h1 className='title-font text-lg font-bold text-gray-900 mb-3'>{'Culture of india'}</h1>
          <p>india is veru rich culturalral heritage etc.</p>
         </div>
        </div> 
      </div>

  {/* card 3*/}
  <div className='p-4 md:w-1/3'>
        <div className=''>
         <img className='w-full' src={'src/assets/tree-736885_1280 (1).jpg'}/>
         <div className='p-6'>
         <h2 className='tracking-widset text-x5 title-font font-medium text-gray-400 mb-1'>
          {'11 jan 2024'}
         </h2>
          <h1 className='title-font text-lg font-bold text-gray-900 mb-3'>{'Culture of india'}</h1>
          <p>india is veru rich culturalral heritage etc.</p>
         </div>
        </div> 
      </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AllBlogs