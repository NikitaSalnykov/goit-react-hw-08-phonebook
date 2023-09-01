import { Header } from 'components/Header/Header'
import { Loader } from 'components/Loader/Loader'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Layout;