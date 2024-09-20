
import { Route, Routes } from 'react-router-dom'
import Router from './router/router'
import Home from './compponents/Client/LayoutClient/Home'
import Layoutadmin from './compponents/Clientadmin/Layout/Layoutadmin'
import Product from './compponents/Clientadmin/Product'
import AddProduct from './compponents/Clientadmin/AddProduct'
import EditProduct from './compponents/Clientadmin/EditProduct'
function App() {
  return (
    <>
        <Router />
    </>
  )
}

export default App
