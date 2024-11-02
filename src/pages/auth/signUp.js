import React,{useEffect} from 'react'
import image2 from '../../images/image2.jpg'
import Form from '../../components/form/form'
import {useNavigate} from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

    useEffect(()=>{

      if(token)
        {
          navigate('/')
        }
        else
        {
          navigate('/signUp')
        }

    },[])

  return (
    <>
    <div className='flex'>
      <div className='w-1/2 h-[100%]'>
        <img src={image2} alt="img" className='w-[100%] h-screen object-cover' />
      </div>
      <div className='w-1/2'>

          <form className='mx-auto w-[50%]'>
              <Form btnName={"Register"} headerText={"Register"} />
          </form>

      </div>
    </div>
    </>
  )
}

export default SignUp
