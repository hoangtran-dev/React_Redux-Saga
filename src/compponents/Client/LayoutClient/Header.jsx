import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-[#003f62] text-white">
      <div className="w-[1314px] h-[100px] mx-auto flex items-center">
        <div className="flex w-1/2 text-[14px] justify-between items-center">
          <a className="w-[140px] h-[39px] flex" href="">
            <img src="/img/image/remote_detail.png" alt="Logo" />
          </a>
          <div className="relative w-[438px] h-[56px] ml-4">
            <input
              className="outline-none border-none rounded-[16px] w-full h-full pl-[25px] text-black"
              placeholder="Search any things"
              type="text"
            />
            <button className="rounded-[16px] font-semibold bg-[#eda415] w-[132px] h-full absolute right-0 top-0">
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-end w-1/2">
          <div className="flex justify-between w-1/2">
            <a className="flex items-center" href="">
              <img
                className="w-[24px] h-[24px]"
                src="/img/icon/user_home/vuesax/linear/vuesax/linear/user.svg"
                alt="Sign in"
              />
              <span className="ml-[13px]">Sign in</span>
            </a>
            <a className="flex items-center justify-between" href="">
              <div className="flex items-center justify-between">
                <img
                  className="w-[24px] h-[24px]"
                  src="/img/icon/heart_home/vuesax/linear/heart.svg"
                  alt="Yêu thích icon"
                />
                <span className="px-[5px] py-[2px] bg-[#EDA415] text-[10px] rounded-full ml-1">
                  0
                </span>
              </div>
              <span className="ml-[13px]">Sign in</span>
            </a>
            <a className="flex items-center justify-between" href="">
              <div className="flex items-center justify-between">
                <img
                  className="w-[24px] h-[24px]"
                  src="/img/icon/cart_home/vuesax/linear/shopping-cart.svg"
                  alt="Cart"
                />
                <span className="px-[5px] py-[2px] bg-[#EDA415] text-[10px] rounded-full ml-1">
                  0
                </span>
              </div>
              <span className="ml-[13px]">Cart</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
