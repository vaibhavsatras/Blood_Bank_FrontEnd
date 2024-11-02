import React from 'react'
import Layout from './layout';
import { FaPlus } from "react-icons/fa6";
import Dialog from '../components/dialog';
import Sidebar from '../components/sidebar';
import Table from '../components/table';


function HomePage() {
   
  return (
    <Layout>
      <div className='flex overflow-x-hidden'>
      <div className='w-1/5 bg-black h-[100vh]'>
      <Sidebar/>
      </div>
      <div className='w-1/2 mt-16'>
      <div className='flex items-center mx-5 my-5 gap-4 '>
         <FaPlus className='text-lg font-bold' />
        <p className='font-bold text-lg cursor-pointer' onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Inventory</p>
      </div>
        <Table/>
      </div>
      <Dialog/>
      </div>
    </Layout>
  )
}

export default HomePage
