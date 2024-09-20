import React from 'react'
import Header from '../LayoutClient/header'
import Menu from '../LayoutClient/Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../LayoutClient/footer'

const Main = () => {
  return (
    <div>
        <Header />
        <Menu />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Main