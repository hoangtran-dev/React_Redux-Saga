import React from 'react'
import { Link } from 'react-router-dom'



const SlideShow = () => {
    return (
        <div> <div className="w-[1222px] grid grid-cols-3 gap-[36px] h-[147px] m-auto relative">
            <div className="border-2 border-brown h-[147px] rounded-[15px] flex items-center justify-around">
                <Link to="#" className="absolute top-[50%] w-[37px] h-[37px] left-0 text-center flex items-center translate-x-[-50%] translate-y-[-50%]">
                    <img className="w-[37px] h-[37px] rounded-full" src="/img/icon/mui_ten2_home.svg" alt="Previous" />
                </Link>
                <img className="w-[154px] h-[94px]" src="/img/image/img1_slideShow.png" alt="Speaker" />
                <div>
                    <p className="text-[23px] text-[#1B5A7D]">Speaker</p>
                    <span className="text-[18px] text-[#265F7F]">(6 items)</span>
                </div>
            </div>
            <div className="border-2 border-brown h-[147px] rounded-[15px] flex items-center justify-around">
                <img className="w-[122px] h-[118px]" src="/img/image/img2_slideShow.png" alt="Desktop & Laptop" />
                <div>
                    <p className="text-[23px] text-[#1B5A7D]">Desktop & Laptop</p>
                    <span className="text-[18px] text-[#265F7F]">(6 items)</span>
                </div>
            </div>
            <div className="border-2 border-brown h-[147px] rounded-[15px] flex items-center justify-around">
                <img className="w-[110px] h-[118px]" src="/img/image/img3_slideShow.png" alt="DSLR Camera" />
                <div>
                    <p className="text-[23px] text-[#1B5A7D]">DSLR Camera</p>
                    <span className="text-[18px] text-[#265F7F]">(6 items)</span>
                </div>
                <Link to="#" className="absolute top-[50%] w-[37px] h-[37px] right-0 text-center flex items-center translate-x-[50%] translate-y-[-50%]">
                    <img className="w-[37px] h-[37px] rounded-full" src="/img/icon/mui_ten3_home.svg" alt="Next" />
                </Link>
            </div>
        </div>
        </div>
    )
}

export default SlideShow