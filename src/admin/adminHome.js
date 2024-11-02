import React, { useEffect } from 'react'
import Layout from '../pages/layout'
import Sidebar from '../components/sidebar'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../redux/userReducer'

function AdminHome() {

    const dispatch = useDispatch()

    useEffect(()=>{

    dispatch(getCurrentUser());
        
    },[])

  return (
    <Layout>
    <div className='flex overflow-x-hidden'>
<div className='w-1/5 bg-black h-[100vh]'>
<Sidebar/>
</div>
<div className='w-1/2'>
<div className='w-[80vw] h-[80vh]'>

    <div className='mx-4 my-5 font-serif mt-20'>
    <h3 className='font-bold text-xl mb-5'>This Home Page</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime nemo rem deserunt quo, vitae numquam dignissimos! Ab explicabo error reiciendis corrupti tempora laboriosam, vel sint beatae, minima dolore at illum, eius nisi. Perferendis facilis dolores voluptates natus obcaecati earum ex quisquam fugit impedit veritatis ea sed quis, dolore saepe voluptate vero, velit consequatur incidunt laboriosam. Consectetur debitis vel odit labore illo tempore laboriosam, modi, reiciendis quam harum incidunt esse ad nihil, voluptates praesentium? Quisquam commodi est delectus, adipisci minima ex, ipsum accusantium laboriosam sapiente odit eum quibusdam quia, natus soluta corrupti nostrum aut dolorem voluptas in porro debitis unde similique quam omnis! Delectus ea quasi dolorum rem consequuntur reiciendis ipsa quas! Id, error? Fuga quidem consectetur ipsa facilis iste mollitia, minus reprehenderit voluptas molestiae totam officiis impedit ratione laudantium animi et voluptatem nisi eius assumenda consequuntur porro qui. Voluptate natus suscipit sapiente dolores sint consequatur! Totam magni sed natus dolor dignissimos deserunt distinctio pariatur, tenetur quisquam tempora accusamus quo illum perspiciatis cum eum voluptatum facilis soluta maxime a aperiam laborum? Sunt quae, quam a similique odio quod unde excepturi voluptates velit ea, corporis culpa pariatur harum hic dolorem in vitae assumenda alias nulla? Aut neque placeat ratione? Eligendi, debitis!</p>
    </div>

</div>
</div>
  </div>
</Layout>
  )
}

export default AdminHome
