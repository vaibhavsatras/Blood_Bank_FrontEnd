import React from 'react'
import { MdBloodtype } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate,Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux'


function Navbar() {

    const navigate = useNavigate();

    const user = useSelector((state)=>{

        return state.userSlice.user

    })


    function LogOut()
    {
        localStorage.clear('token')
        navigate('/signIn')
    }


    const location = useLocation();
  return (
    <div className='flex justify-between bg-black px-6 py-3 items-center fixed w-full z-50'>
        <div className='flex justify-center items-center gap-3'>
           <MdBloodtype color='red' className='size-6' />
            <h3 className='text-xl font-bold italic text-white'>Blood Bank</h3>
        </div>
        <div className='flex items-center'>
                <div className='flex items-center gap-2'>
                <span><FaRegUserCircle color='white' className='size-5' /></span>
                <small className='text-white me-5 badge badge-error'>{
                    
                    user.name&& user.name || user.hospitalName && user.hospitalName || user.orgnaztionName && user.orgnaztionName

                    }</small>

               {
                user.role === 'Organization' &&  <div>
                {
                    (location.pathname === '/')|| (location.pathname === '/donar') || (location.pathname === '/hospital') ?<Link to={'/analytics'} ><span className='text-white font-bold me-2 cursor-pointer'>Analytics</span></Link>:
                    <Link to={'/'} ><span className='text-white font-bold me-2 cursor-pointer'>Home</span></Link>
                }    
                
                </div>
               }
                <span className='me-10 text-white text-lg font-bold'>Welcome!</span>
                </div>  
            <ul className='flex gap-4 text-lg font-bold text-white items-center'>
                <li>
                    <button className='bg-red-500 py-0.5 px-2 text-[15px] rounded-lg hover:bg-red-400 duration-300 transition-all'
                    onClick={LogOut}
                    >Logout</button>
                </li>
            </ul>
        </div> 
    </div>
  )
}

export default Navbar
