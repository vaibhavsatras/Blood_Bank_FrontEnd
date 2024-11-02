import React, { useEffect } from 'react'
import Sidebar from '../components/sidebar'
import Layout from './layout'
import { useDispatch, useSelector } from 'react-redux'
import {getOrg} from '../redux/inventoryReducer'
import moment from 'moment'
import { getCurrentUser } from '../redux/userReducer'

function Organization() {

    const {orgNewData} = useSelector((state)=>{

        return state.inventoryReducer

    })

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(getOrg())
        dispatch(getCurrentUser())
        

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
      </tr>
    </thead>
    <tbody>
        {
          orgNewData.map((item,idx)=>{

            return(<tr key={idx}>
              <td className='border-2 border-black' >{item.orgnaztionName}</td>
                    <td className='border-2 border-black' >{item.email}</td>
                    <td className='border-2 border-black' >{item.phone}</td>
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

export default Organization
