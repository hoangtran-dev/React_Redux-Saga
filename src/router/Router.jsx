import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layoutadmin from '../compponents/Clientadmin/Layout/Layoutadmin'
import Product from '../compponents/Clientadmin/Product'
import AddProduct from '../compponents/Clientadmin/AddProduct'
import EditProduct from '../compponents/Clientadmin/EditProduct'
import Home from '../compponents/Client/LayoutClient/Home'
import ProductList from '../compponents/Client/Product/ProductList'
import Main from '../compponents/Client/Main/Main'
import ProductDetail from '../compponents/Client/Product/ProductDetail'
// import Resgiter from '../compponents/Clientadmin/Login/Resgiter'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="client" element={<Main />}>
          <Route path="productlist" element={<ProductList />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="product/:id" element={<ProductDetail />}></Route>
          {/* <Route path="register" element={<Resgiter />}></Route> */}
        </Route>
        <Route path="admin" element={<Layoutadmin />}>
          <Route path="product" element={<Product />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="editproduct/:productId" element={<EditProduct />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default Router