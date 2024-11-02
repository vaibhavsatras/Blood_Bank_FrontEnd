import React, {useState } from 'react'
import {useDispatch} from 'react-redux'
import { createInventory } from '../redux/inventoryReducer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function Dialog() {

  const[inputType,setInputtype] = useState("In");
  const[bloodgroup,setBloodgroup] = useState("Open this Select menu");
  const[userMail,setUserMail] = useState("");
  const[quantity,setQuantity] = useState("");

  // const {message} = useSelector((state)=>{

  //     return state.inventoryReducer

  // }) 


  const dispatch = useDispatch();


    function getData()
    {
      const inventoryData = {
        inventoryType:inputType,
        bloodGroup:bloodgroup,
        quantity:quantity,
        userMail:userMail
      }
      dispatch(createInventory(inventoryData))

      setBloodgroup('Open this Select menu')
      setQuantity('')
      setUserMail('')

    }


  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Manage Blood Record</h3>
    <hr className='mt-2 border-black' />

   <div className='mt-5 flex gap-5 '>

    <span className='font-semibold'>Blood Type : </span>

   <div>
    <input type="radio" className='me-2 cursor-pointer' name='inventoryType' id='In' defaultChecked 

    value={"In"} onChange={(e)=>setInputtype(e.target.value)}
    />
    <label htmlFor="In" className='font-semibold'>In</label>
    </div>

    <div>
    <input type="radio" className='me-2 cursor-pointer' name='inventoryType' id='out'
    value={"Out"} onChange={(e)=>setInputtype(e.target.value)}
    />
    <label htmlFor="In" className='font-semibold'>Out</label>
    </div>
   </div>
    
    <div className='mt-5'>
    <select className="select select-bordered w-full max-w-xl outline-none" name='bloodGroup'

      value={bloodgroup} onChange={(e)=>setBloodgroup(e.target.value)}
    >
            <option defaultValue={'Open this Select menu'}></option>
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
    </select>
    </div>
    <div className='mt-5'>
        <label htmlFor="email" className='font-semibold block'>Donar Email</label>
        <input
  type="email"
  name="userMail"
  placeholder="Type here"
  className="input input-bordered input-accent w-full max-w-xl mt-1.5"
  value={userMail} onChange={(e)=>setUserMail(e.target.value)}
  />
    </div>
    <div className='mt-5'>
        <label htmlFor="qauntity"  className='font-semibold block'>Quantity</label>
        <input
  type="number"
  name="qunatity"
  placeholder="Type here"
  className="input input-bordered input-accent w-full max-w-xl mt-1.5"
  value={quantity} onChange={(e)=>setQuantity(e.target.value)}
  />
    </div>
    <div className='mt-5 float-end flex gap-2'>
    <form method='dialog'>
    <button className='bg-gray-600 text-white px-3 py-1.5 font-semibold rounded-lg w-[80px]'>Close</button>
    </form>
    <button type='button' className='bg-blue-600 text-white px-3 py-1.5 font-semibold rounded-lg w-[80px]'
    onClick={getData}
    >Submit</button>
  </div>
  </div>
</dialog>
<ToastContainer />
    </div>
  )
}

export default Dialog
