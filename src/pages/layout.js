import React from 'react'
import Navbar from '../components/navbar'

function Layout({children}) {
  return (
    <>
        <div>
            <Navbar/>
        </div>
        <div>{children}</div>
    </>
  )
}

export default Layout
