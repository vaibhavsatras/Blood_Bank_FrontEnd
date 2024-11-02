import React, { useEffect, useState } from 'react'
import Input from './input'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getToken, userReducer, userSignin } from '../../redux/userReducer';

function Form({btnName,headerText}) {

    const[role,setRole] = useState('User');
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[address,setAddress]  = useState('');
    const[phone,setPhone] = useState('');
    const[hospitalName,setHospitalName] = useState('');
    const[orgnaztionName,setOrgnazationName] = useState('');
    const[website,setWebsite] = useState('');

    const dispatch = useDispatch()

    
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const user = useSelector((state)=>{

        return state.userSlice
    })

    useEffect(()=>{

        dispatch(getToken())

    },[])

    // Register Form

    async function  RegisterForm(e)
    {
        e.preventDefault();
        const newUser = {
            role,name,email,password,phone,address,website,hospitalName,orgnaztionName
        }
      dispatch(userReducer(newUser));

    setName('')
    setEmail('')
    setAddress('')
    setPassword('')
    setPhone('')
    setWebsite('')
    setHospitalName('')
    setOrgnazationName('')
     
    }


    //Sign In form

    async function  SignInForm(e)
    {
        e.preventDefault();
        const userData = {
            role,email,password
        }
        
     dispatch(userSignin(userData));
    
    setEmail('')
    setPassword('')

    }    

  return (
    <>

    {
        ((()=>{
        
            switch(true)
            {
                case headerText === 'Sign In':{

                    return (
    <>
      <div className=''>
    <h3 className='text-center mt-[40%] mb-2 text-xl'>{headerText}</h3>
    <hr className='w-[100%] border-black' />
    </div>
    <div className='flex justify-between mt-6 cursor-pointer'>
        <div>
            <input type="radio" name='role' id='user' className='cursor-pointer' value={'User'} onChange={(e)=>setRole(e.target.value)} defaultChecked />
            <label htmlFor="user" className='ms-2'>User</label>
        </div>
        <div>
            <input type="radio" name='role' id='admin' className='cursor-pointer' value={'Admin'} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="admin" className='ms-2'>Admin</label>
        </div>
        <div>
            <input type="radio" name='role' id='hospital' className='cursor-pointer' value={'Hospital'} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="hospital" className='ms-2'>Hospital</label>
        </div>
        <div>
            <input type="radio" name='role' id='orgnization' className='cursor-pointer' value={'Organization'} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="orgnization" className='ms-2'>Orgnization</label>
        </div>
    </div>
    
    <div>
    <div className='mx-10 w-[100%]'>
      <Input htmlFor={"email"} lableText={"Email"} inputType={"email"} name={"email"} placeHolder={"Email"} value={email} onChange={(e)=>setEmail(e.target.value)}  />
      <Input htmlFor={"password"} lableText={"Password"} inputType={"password"} name={"password"} placeHolder={"Password"} value={password} onChange={(e)=>setPassword(e.target.value)}  />
      <span>{user.error}</span>
    </div>
    <div className='mt-2 ms-10'>
    <span className='ms-20'>have not register yet?  <Link to={'/signUp'} ><span>here</span></Link> </span>
    </div>
    <div className='mt-[20px] mx-10 w-[50%]'>
     <button type='submit' className='bg-red-500 w-[100%] mx-[0%] py-2 rounded-lg text-white font-bold text-lg
    shadow-lg'onClick={SignInForm}>{btnName}</button>
    </div>
   
</div>

 </>)

}

case headerText === 'Register':{

        return(
    <>
    <form className='mx-auto w-[100%]'>
    <h3 className='text-center mt-[30%] mb-3 text-xl'>{headerText}</h3>
    <hr className='w-[100%] border-black' />

    <small className='flex justify-center items-center mt-2'>
        {
            user.isPending ? " ": user.error
        }
        
    </small>
    <small className='flex justify-center items-center mt-2'>
        {
            user.isPending ? " " :user.message
        }
        
    </small>
    
    <div className='flex justify-between mt-6 cursor-pointer'>
        <div>
            <input type="radio" name='role' id='user' className='cursor-pointer' 
            value={'User'} onChange={(e)=>setRole(e.target.value)} defaultChecked />
            <label htmlFor="user" className='ms-2'>User</label>
        </div>
        <div>
            <input type="radio" name='role' id='admin' className='cursor-pointer' value={'Admin'} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="admin" className='ms-2'>Admin</label>
        </div>
        <div>
            <input type="radio" name='role' id='hospital' className='cursor-pointer' value={'Hospital'} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="hospital" className='ms-2'>Hospital</label>
        </div>
        <div>
            <input type="radio" name='role' id='orgnization' className='cursor-pointer' value={'Organization'} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="orgnization" className='ms-2'>Orgnization</label>
        </div>
    </div>
            
    <div>
    <div className='flex justify-between'>
    {
        role === 'User' || role=== 'Admin'?
        <Input htmlFor={"name"} lableText={"Name"} inputType={"text"} name={"name"} placeHolder={"Name"} value={name} onChange={(e)=>setName(e.target.value)}  />:null
    }
    {
        role === 'Hospital' ? <Input htmlFor={"hospitalName"} lableText={"Hospital"} inputType={"text"} name={"hospitalName"} placeHolder={"Hospital"} value={hospitalName} onChange={(e)=>setHospitalName(e.target.value)}  />:null
    }
    {
        role === 'Organization' ?<Input htmlFor={"orgnaztionName"} lableText={"Organization"} inputType={"text"} name={"orgnaztionName"} placeHolder={"Organization"} value={orgnaztionName} onChange={(e)=>setOrgnazationName(e.target.value)}  />:null
    }
    <Input htmlFor={"email"} lableText={"Email"} inputType={"email"} name={"email"} placeHolder={"Email"} value={email} onChange={(e)=>setEmail(e.target.value)}  />
    </div>
    <div className='flex'>
    
    </div>
      <div className='flex'>
      <Input htmlFor={"password"} lableText={"Password"} inputType={"password"} name={"password"} placeHolder={"Password"} value={password} onChange={(e)=>setPassword(e.target.value)}  />
      <Input htmlFor={"phone"} lableText={"Phone"} inputType={"text"} name={"phone"} placeHolder={"Phone"} value={phone} onChange={(e)=>setPhone(e.target.value)}  />
      </div>
      <div className='flex'>
      <Input htmlFor={"address"} lableText={"Address"} inputType={"text"} name={"address"} placeHolder={"Address"} value={address} onChange={(e)=>setAddress(e.target.value)}  />
      <Input htmlFor={"website"} lableText={"Website"} inputType={"text"} name={"website"} placeHolder={"Website"} value={website} onChange={(e)=>setWebsite(e.target.value)}  />
      </div>
      <div className='mt-2 ms-10'>
    <span className='float-end mb-5'>Already registered?<Link to={'/signIn'} ><span> login</span></Link> </span>
    </div>
      <div className='mt-[20px]'>
     <button type='submit' className='bg-red-500 w-[50%] mx-[25%] py-2 rounded-lg text-white font-bold text-lg
    shadow-lg'onClick={RegisterForm}>{btnName}</button>
</div>

    </div>
    </form>
        </>)
}}

})())}

    </>
  )
}

export default Form
