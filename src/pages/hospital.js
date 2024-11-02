import React, { useEffect } from 'react'
import Layout from './layout';
import Sidebar from '../components/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getHospitals } from '../redux/inventoryReducer';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/userReducer';

function Hospital() {

  const getData = useSelector((state)=>{

      return state.inventoryReducer.data

  })

  const dispatch = useDispatch();

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(()=>{

    dispatch(getHospitals());
    dispatch(getCurrentUser());

    if(!token)
    {
        navigate('/signIn')
    }
    else
    {
      navigate('/hospital')
    }

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
        <th className='border-2 border-black'>Hospital</th>
        <th className='border-2 border-black'>Email</th>
        <th className='border-2 border-black'>Phone</th>
        <th className='border-2 border-black'>Date and Time</th>
        
      </tr>
    </thead>
    <tbody>
     {
      getData.map((item,idx)=>{

          return(
          <tr key={idx}>
            <td className='border-2 border-black' >{ item.Hospital === null ? "Data Not Found" : item.Hospital.hospitalName}</td>
                  <td className='border-2 border-black' >{item.Hospital === null ? "Data Not Found" : item.Hospital.email}</td>
                  <td className='border-2 border-black' >{item.Hospital === null ? "Data Not Found" : item.Hospital.phone}</td>
                  <td className='border-2 border-black' >{moment(item.createdAt).format('DD/MM/YYY hh:mm A')}</td>
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

export default Hospital
