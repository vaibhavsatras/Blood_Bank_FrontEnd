import React, { useEffect } from 'react'
import image1 from '../../images/image1.avif'
import Form from '../../components/form/form'
import { useNavigate } from 'react-router-dom'


function SignIn() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')



    useEffect(()=>{


      if(token)
        {
          navigate('/organization')
        }
        else
        {
          navigate('/signIn')
        }

    },[])

  return (
    <>
    <div className='flex'>
      <div className='w-1/2 h-[100%]'>
        <img src={image1} alt="img" className='w-[100%] h-screen object-cover' />
      </div>
      <div className='w-1/2'>

          <form className='mx-auto w-[50%]'>
              <Form btnName={"Sign In"} headerText={"Sign In"} />
          </form>

      </div>
    </div>
    </>
  )
}

export default SignIn
