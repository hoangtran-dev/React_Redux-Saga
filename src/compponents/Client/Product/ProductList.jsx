import React from 'react'
import instance from '../../../axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';

const categories = [
  { name: 'All categories', count: 5 },
  { name: 'Tablet', count: 5 },
  { name: 'Laptop', count: 5 },
  { name: 'Headphones', count: 5 },
  { name: 'Console', count: 5 },
  { name: 'Other', count: 5 },
];

const ProductList = () => {
    const { data:products, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => instance.get('/products').then(res => res.data), // Lấy dữ liệu từ res.data
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>
  return (
    <div> <div>
    {/* Main content */}
    <div className="flex justify-between mb-[58px]">
      {/* Left section */}
      <div className="w-[250px] leading-[30px] pr-[20px] ml-[80px]">
        <div className="flex w-full justify-between mb-[15px]">
          <p className="text-[#003F62] font-medium">Categories</p>
          <p className="text-[#595959] text-[15px]">Reset</p>
        </div>
        <div>
          {categories.map((category) => (
            <div key={category.name} className="flex justify-between items-center w-full mb-[10px]">
              <span className="leading-[30px] flex">
                <input
                  className="mr-[10px] text-[#222222] checked:bg-[#533939] checked:text-white rounded-[8px] w-[30px] h-[30px]"
                  type="checkbox"
                />
                <label>{category.name}</label>
              </span>
              <p>{category.count}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-3 gap-[23px] mb-[23px]">
        {products.map((product) => (
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
</div>
  )
}

export default ProductList