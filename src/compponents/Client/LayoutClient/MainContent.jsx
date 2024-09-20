import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import instance from '../../../axios'


const MainContent = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => instance.get('/products').then(res => res.data), // Lấy dữ liệu từ res.data
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <div className="w-[1314px] m-auto">
        <div className="w-[100%] my-[62px] flex justify-between">
          <p className="text-[27.38px] font-semibold text-[#1B5A7D]">Popular products</p>
          <div className="flex text-[16px]">
            <Link to="#" className="w-[139px] h-[45px] border-2 border-brown rounded-[20px] ml-[10px] font-medium text-[#1B5A7D] text-center">Cameras</Link>
            <Link to="#" className="w-[139px] h-[45px] border-2 border-brown rounded-[20px] ml-[10px] font-medium text-[#1B5A7D] text-center">Laptops</Link>
            <Link to="#" className="w-[139px] h-[45px] border-2 border-brown rounded-[20px] ml-[10px] font-medium text-[#1B5A7D] text-center">Tablets</Link>
            <Link to="#" className="w-[139px] h-[45px] border-2 border-brown rounded-[20px] ml-[10px] font-medium text-[#1B5A7D] text-center">Mouse</Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[26px] border-2 mb-[48px]">
          {Array.isArray(data) && data.slice(0, 8).map(product => (
            <div key={product.id} className="border-2 flex flex-col rounded-[20px] h-[313px] relative group">
              <div>
                <Link to={`/client/product/${product.id}`} className=" m-auto">
                  <img className="m-auto h-[168px] w-[300px] rounded-[15px]" src={product.image} alt={product.name} />
                </Link>
                <button className="absolute top-[36px] right-[22px] w-[27px] h-[27px]">
                  <img className="w-[27px] h-[27px]" src="/img/icon/heart_box_item_home.svg" alt="heart icon" />
                </button>
              </div>

              <div className="h-[100%] flex justify-between flex-col item-info group-hover:hidden p-[20px]">
                <p className="text-[17px] font-medium text-[#003F62]">{product.name}</p>
                <p className="text-[#4A4A4A] font-medium text-[17px]">{product.price}</p>
              </div>

              <div className="hidden bottom-0 w-full h-[100%] px-[10px] justify-between items-center hover-content group-hover:flex">
                <button className="mb-0 w-[204px] h-[60px] bg-[#87BCD9] relative flex items-center px-[10px] rounded-[20px] text-[16px] font-semibold">
                  Add to cart
                  <img className="absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] object-cover" src="/img/icon/cart_boxsp_home.svg" alt="cart icon" />
                </button>
                <button className="bg-[#87BCD9] w-[70px] rounded-full h-[60px]">
                  <img className="w-[70px] h-[60px] object-cover" src="/img/icon/eye_boxsp2_home.svg" alt="eye icon" />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default MainContent
