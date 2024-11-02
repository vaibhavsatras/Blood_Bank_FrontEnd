import React, { useEffect } from 'react'
import Layout from './layout'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../redux/userReducer'
import { createAnalytics } from '../redux/analyticsReducer'

function Analytics() {

  const {data}  = useSelector((state)=>{

      return state.analyticsReducer

  })

  console.log(data)

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getCurrentUser())
    dispatch(createAnalytics())

  },[])

  return (
    <Layout>
      <div className=' grid grid-rows-4 grid-cols-4 gap-10 mt-5 mx-8'>
        {
          data.map((item,idx)=>{

              return(
                <div className="card w-80 h-52 shadow-xl" key={idx}>
                  
                  <div className="card-body">
                  <h2 className=" font-semibold font-serif text-lg text-center">{item.bloodGroup}</h2>
                  <div className='flex flex-col gap-3 mt-3 font-serif text-md font-normal'>
                    <span>Total In  :  {item.totalIn}</span>
                    <span>Total Out :  {item.totalOut}</span>
                  </div>
                  <div>
                  <span className='flex justify-center items-center mt-5 font-serif text-[15px] font-normal 
                    bg-slate-600 py-1 w-[80%] px-2 mx-auto rounded text-white
                  '>Total Available : {item.avaibleTotal} ML</span>
                  </div>
                </div>
  
                </div>

              )

          })
        }
      </div>
    </Layout>
  )
}

export default Analytics
