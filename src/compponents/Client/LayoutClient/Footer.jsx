import React from 'react';

const Footer = () => {
  return (
    <div className="border text-center w-[1440px] bg-[#e2f4ff] m-auto">
      <div className="m-auto w-[1310px] h-[139px] bg-white mt-[42px] rounded-[15px] flex justify-around items-center text-white">
        <p className="font-bold text-[29px] text-[#1B5A7D]">Subscribe newsletter</p>
        <input
          className="px-[15px] w-[388px] h-[63px] bg-[#EDA415] text-white placeholder-white rounded-[20px] outline-none"
          placeholder="Email address"
        />
        <div className="flex justify-between">
          <img
            className="w-[45px] h-[45px] mr-[15px]"
            src="/img/icon/tai_nghe_footer_home/vuesax/linear/headphone.svg"
            alt=""
          />
          <p className="text-[14px] font-semibold text-black">
            Call us 24/7 : <br />
            (+62) 0123 567 789
          </p>
        </div>
      </div>

      <div className="w-[1310px] m-auto py-[45px] flex justify-between">
        <div>
          <a className="w-[140] h-[39px]" href="">
            <img
              className="w-[140px] h-[39px] object-cover"
              src="/img/icon/logo_footer.svg"
              alt=""
            />
          </a>
          <p className="text-left w-[183px] text-[16px] border-b-black py-[40px] text-[#1B5A7D]">
            64 st james boulevard
            <br />
            hoswick, ze2
            <br />
            7zj
          </p>
          <div className="flex w-[140px] justify-between">
            <a className="w-[24px] h-[24px]" href="">
              <img
                className="w-[24px] h-[24px]"
                src="/img/icon/google_footer_home/vuesax/linear/google.svg"
                alt=""
              />
            </a>
            <a className="w-[24px] h-[24px]" href="">
              <img
                className="w-[24px] h-[24px]"
                src="/img/icon/fb_footer_home/vuesax/linear/vuesax/linear/facebook.svg"
                alt=""
              />
            </a>
            <a className="w-[24px] h-[24px]" href="">
              <img
                className="w-[24px] h-[24px]"
                src="/img/icon/phone_footer_home/vuesax/linear/whatsapp.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="text-left flex flex-col justify-between">
          <p className="text-[19px] font-semibold text-[#1B5A7D]">Find product</p>
          <ul>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Brownze arnold</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Chronograph blue</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Smart phones</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Automatic watch</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Hair straighteners</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="text-left flex flex-col justify-between">
          <p className="text-[19px] font-semibold text-[#1B5A7D]">Get help</p>
          <ul>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">About us</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Contact us</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Return policy</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Privacy policy</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Payment policy</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="text-left flex flex-col justify-between">
          <p className="text-[19px] font-semibold text-[#1B5A7D]">About us</p>
          <ul>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">News</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Service</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="flex items-center">
                  <p className="w-[10px] h-[10px] rounded-full bg-[gray] mr-[15px]"></p>
                  <span className="text-[#1B5A7D] text-[19px]">Our policy</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
