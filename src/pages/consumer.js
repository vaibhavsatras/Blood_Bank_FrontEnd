import React,{useEffect} from 'react'
import Sidebar from '../components/sidebar'
import Layout from './layout'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../redux/userReducer'
import { getConsumers } from '../redux/donationReducer'
import moment from 'moment'

function Consumer() {


  const {consumers} = useSelector((state)=>{

      return state.donationReducer

  })

const dispatch = useDispatch();

  useEffect(()=>{
      
    dispatch(getCurrentUser());
    dispatch(getConsumers());

  },[])

  return (
    <Layout>
    <div className='flex overflow-x-hidden'>
    <div className='w-1/5 bg-black h-[100vh]'>
    <Sidebar/>
    </div>
    <div className='w-1/2'>
    <div className='w-[80vw] h-[80vh]'>
    <div className="overflow-x-hidden">
<table className="table w-[80%] mx-auto my-10 table-sm border-2 border-black mt-28">
  <thead>
    <tr className='border-2 border-black text-center'>
      <th className='border-2 border-black'>Blood Group</th>
      <th className='border-2 border-black'>Inventory Type</th>
      <th className='border-2 border-black'>Name</th>
      <th className='border-2 border-black'>Phone</th>
      <th className='border-2 border-black'>Date and Time</th>
    </tr>
  </thead>
  <tbody>
  {
            consumers.map((item,idx)=>{

                return(
                <tr key={idx} className='text-center'>
                  <th className='border-2 border-black '>{item.bloodGroup}</th>
                  <th className='border-2 border-black'>{item.inventoryType}</th>
                  <th className='border-2 border-black'>{item.Hospital === null? "Data Not Found" : item.Hospital.hospitalName}</th>
                  <th className='border-2 border-black'>{item.Hospital === null? "Data Not Found" : item.Hospital.phone}</th>
                  <th className='border-2 border-black'>{moment(item.createdAt).format('DD/MM/YYYY hh:mm A')}</th>
                </tr>)

            })
          }
    </tbody>
</table>
</div>
    </div>
    </div>
      </div>
  </Layout>
  )
}

export default Consumer
