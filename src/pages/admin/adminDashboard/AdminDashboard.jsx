import React from 'react'
import { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import myContext from '../../../context/data/myContext'

function AdminDashboard() {
  const context = useContext(myContext);
  const {mode}= context;

  return (
    <Layout>
      <div className='py-10'>
        <div className='flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8 ' >
          <div className='left'>
            <img src={'src/assets/tree-736885_1280 (1).jpg'} className='w-40 h-40 object-cover rounded-full border-2 border-purple-600 p-1'/>
          </div>
          <div className='right'>
           <h1 className='text-cener font-bold text-2xl mb-2'>Bhavika Maurya</h1>
           <div className='flex gap-2 mt-2'>
            <Link to={'/Createblog'}>
            <div className='mb-2'>
            <Button className='px-8 py-2'>Create Blog</Button>
            </div>
            </Link>
            <div className='mb-2'>
            <Button className='px-8 py-2'>Logout</Button>
            </div>
           </div>
          </div>
        </div>

        <hr className='border-2 border-gray-400' />

        <div>
          <div className='container mx-auto px-4 max-w-7xl my-5'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-xl'>
         <table className='w-full border-2 border-black shadow-md text-sm text-left text-gray-500 '>
          <thead className='text-xs'>
            <tr>
              <th className='px-6 py-3'>S.No</th>
              <th className='px-6 py-3'>Thumbnail</th>
              <th className='px-6 py-3'>Title</th>
              <th className='px-6 py-3'>Categhory</th>
              <th className='px-6 py-3'>Date</th>
              <th className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2'>
             <td className='px-6 py-4'>
              {'1.'}
             </td>
             <th className='px-6 py-4'>
             <img src="" alt="" className='w-16 rounded-lg' />
             </th>
             <td className='px-6 py-4'>
              {'Art and culture'}
             </td>

             <td className='px-6 py-4'>{'arts'}</td>

             <td className='px-6 py-4'>{'jan 11 2024'}</td>

             <td className='px-6 py-4'>
              <button className='px-4 py-1 rounded-lg text-black font-bold bg-red-500'>Delete</button>
             </td>
            </tr>
          </tbody>


         </table>
         </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard