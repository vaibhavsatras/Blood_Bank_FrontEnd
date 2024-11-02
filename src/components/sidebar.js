import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { MdInventory } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaHospitalAlt } from "react-icons/fa";
import {useSelector} from 'react-redux'
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdLocalHospital } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";


function Sidebar() {

  const location = useLocation()

  const newRoute = location.pathname

  const {user} = useSelector((state)=>{

      return state.userSlice
    
  })


  return (
    <div>
         <ul className='mt-[30%] flex flex-col gap-5'>
          {
            user.role === 'Organization' && <>
            <Link to={'/'} ><li className={` ${newRoute ==='/' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
          <MdInventory className='text-lg' />
            Inventory</li></Link>
          <Link to={'/donar'} ><li className={` ${newRoute ==='/donar' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
          <BiSolidDonateBlood className='text-lg' />
            Donar</li></Link>
          <Link to={'/hospital'}><li className={` ${newRoute ==='/hospital' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
          <FaHospitalAlt className='text-lg' />
            Hospital</li></Link>

            </>
          }
           {
            (user.role === 'User' ) ? <>
            
            <Link to={'/organization'}><li className={` ${newRoute ==='/organization' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
          <FaHospitalAlt className='text-lg' />
            Organization</li></Link>
            <Link to={'/donation'}><li className={` ${newRoute ==='/donation' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
            <BiSolidDonateHeart className='text-lg' />
            Donations</li></Link>
            
            </>:null
           }
           {
            user.role === 'Hospital' ?
            <>
               
            <Link to={'/organization'}><li className={` ${newRoute ==='/organization' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
          <FaHospitalAlt className='text-lg' />
            Organization</li></Link>
            <Link to={'/consumer'}><li className={` ${newRoute ==='/consumer' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
            <MdLocalHospital className='text-lg' />
            Consumers</li></Link>
            </>:null
           }

{
            user.role === 'Admin' ?
            <>
               
            <Link to={'/adminDonar'}><li className={` ${newRoute ==='/adminDonar' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
          <FaHospitalAlt className='text-lg' />
            Donar List</li></Link>
            <Link to={'/adminHospital'}><li className={` ${newRoute ==='/adminHospital' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
            <MdLocalHospital className='text-lg' />
            Hospital List</li></Link>
            <Link to={'/adminOrgnization'}><li className={` ${newRoute ==='/adminOrgnization' ? "bg-white text-black":"bg-black text-white" }  px-[10%] font-bold py-1 flex items-center gap-2`}>
            <CgOrganisation className="text-lg" />
            Orgnization List</li></Link>
            </>:null
           }
            
        </ul>
    </div>
  )
}

export default Sidebar
