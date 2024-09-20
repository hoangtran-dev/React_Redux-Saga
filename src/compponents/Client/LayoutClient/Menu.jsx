import React from 'react'


const Menu = () => {
  return (
    <div>
        <div className="w-[1314px] m-auto h-[70px] text-[16px] flex items-center justify-between">
  <div className="bg-[#EDA415] text-white text-center w-[188px] px-[15px] h-[70px] flex items-center justify-center">
    <span>Browse categories</span>
    <img className="ml-[5px] text-white flex font-bold items-end mt-[4px]"
      src="/img/icon/suột_home/vuesax/linear/vuesax/linear/arrow-down.svg" alt="" />
  </div>

  <div className="flex w-3/4 justify-between items-center">
    <ul className="flex items-center w-1/2 h-[70px] font-medium ">
      <li className="w-1/5">
        <a href="/client/home" className="flex justify-evenly">Home
          <img className="mt-1 text-black flex font-bold"
            src="/img/icon/suột_đen/vuesax/linear/vuesax/linear/Vector.svg" alt="" />
        </a>
      </li>

      <li className="w-1/5">
        <a href="/client/productlist" className="flex justify-evenly">Catalog
          <img className="mt-1" src="/img/icon/suột_đen/vuesax/linear/vuesax/linear/Vector.svg" alt="" />
        </a>
      </li>

      <li className="w-1/5">
        <a href="#" className="flex justify-evenly">Blog</a>
      </li>

      <li className="w-1/5">
        <a href="#" className="flex justify-evenly">Pages
          <img className="mt-1 text-black flex font-bold"
            src="/img/icon/suột_đen/vuesax/linear/vuesax/linear/Vector.svg" alt="" />
        </a>
      </li>

      <li className="w-1/5">
        <a href="#" className="flex justify-around">About us
          <img className="mt-1 text-black flex font-bold"
            src="/img/icon/suột_đen/vuesax/linear/vuesax/linear/Vector.svg" alt="" />
        </a>
      </li>
    </ul>
    <a className="font-bold text-[#003F62]" href="#">30 Days Free Return</a>
  </div>
</div>

    </div>
  )
}

export default Menu