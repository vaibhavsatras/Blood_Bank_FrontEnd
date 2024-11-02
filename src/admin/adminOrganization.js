import React, { useEffect } from 'react'
import Layout from '../pages/layout'
import Sidebar from '../components/sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../redux/userReducer'
import moment from 'moment'
import { deleteOrg, getOrganizations } from '../redux/adminReducer'

function AdminOrganization() {

  const {data} = useSelector((state)=>{

      return state.adminReducer

  })

  const deleteorg = (id)=>{
      dispatch(deleteOrg(id))
  }

  const dispatch = useDispatch()

  useEffect(()=>{

      dispatch(getCurrentUser());
      dispatch(getOrganizations());

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
        <th className='border-2 border-black'>Organization</th>
        <th className='border-2 border-black'>Email</th>
        <th className='border-2 border-black'>Phone</th>
        <th className='border-2 border-black'>Date and Time</th>
        <th className='border-2 border-black'>Status</th>
      </tr>
  </thead>
  {
      data.map((item,idx)=>{

          return(
          <tr key={idx} className='text-center' >
              <td className='border-2 border-black '>{item.orgnaztionName}</td>
              <td className='border-2 border-black '>{item.email}</td>
              <td className='border-2 border-black '>{item.phone}</td>
              <td className='border-2 border-black '>{moment(item.createdAt).format('DD/MM/YYY hh:mm A')}</td>
              <td className='border-2 border-black '>
                <button className='bg-red-600 text-white px-2 py-1 rounded-lg' onClick={()=>deleteorg(item._id)}>Delete</button>
              </td>
          </tr>)

      })
    }
</table>
</div>
</div>
</div>
  </div>
</Layout>
  )
}

export default AdminOrganization
