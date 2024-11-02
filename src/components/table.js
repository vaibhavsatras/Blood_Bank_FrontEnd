import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getCurrentUser } from '../redux/userReducer';
import { getInventory } from '../redux/inventoryReducer';
import  moment from 'moment'

function Table() {
    const {data} = useSelector((state)=>{

        return state.inventoryReducer

    })


    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    
    const dispatch = useDispatch();

    useEffect(()=>{

      dispatch(getCurrentUser())

      dispatch(getInventory())

        if(token)
        {
            navigate('/')
        }
        else
        {
          navigate('/signIn')
        }

    },[])

  return (
    <div>
       <div className='w-[80vw] h-[80vh]'>
      <div className="overflow-x-hidden">
  <table className="table w-[80%] mx-auto my-10 table-sm border-2 border-black">
    <thead>
      <tr className='border-2 border-black text-center'>
        <th className='border-2 border-black'>Blood Group</th>
        <th className='border-2 border-black'>Inventory Type</th>
        <th className='border-2 border-black'>Quantity</th>
        <th className='border-2 border-black'>User Email</th>
        <th className='border-2 border-black'>Date and Time</th>
        
      </tr>
    </thead>
    <tbody>
      {
        data.map((item,idx)=>{

            return(
            <tr key={idx} className='text-center'>
        <td className='border-2 border-black'>{item.bloodGroup}</td>
        <td className='border-2 border-black'>{item.inventoryType}</td>
        <td className='border-2 border-black'>{`${item.quantity} ML`}</td>
        <td className='border-2 border-black'>{item.userMail}</td>
        <td className='border-2 border-black'>{moment(item.createdAt).format('DD/MM/YYYY hh:mm A ')}</td>
      </tr>
        )

        })
      }
      </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default Table
