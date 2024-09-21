import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../../../Redux/App/app.slide';

const Header = () => {
  const mode = useSelector((state) => state.app.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark-mode' : 'light-mode';
  }, [mode]);

  const handleModeChange = () => {
    dispatch(changeMode(mode === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={`w-full ${mode === 'light' ? 'bg-[#003f62]' : 'bg-black'} text-white`}>
      <div data-bs-theme={mode}>
        <Form.Check
          checked={mode === 'dark'} // Đặt trạng thái cho checkbox
          onChange={handleModeChange} // Sử dụng hàm để thay đổi chế độ
          type="switch"
          id="custom-switch"
          label={mode === 'light' ? 'Light' : 'Dark'}
        />

      </div>

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
              <span className="ml-[13px]">Favorites</span>
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
