import React from 'react'
import { Link } from 'react-router-dom'



const Banner = () => {
    return (
        <div>
            <div className="mb-[52px] w-[1314px] h-[394px] m-auto flex justify-between items-center">
                <div className="ml-[109px]">
                    <p className="font-bold text-[43px] text-[#1B5A7D]">Canon</p>
                    <p className="font-bold text-[43px] text-[#1B5A7D] mb-[20px]">camera</p>
                    <Link to="/shop">
                        <button className="mr-[20px] w-[144px] h-[61px] rounded-[20px] font-semibold text-white bg-[#EDA415]">Shop now</button>
                    </Link>
                    <Link to="/view-more">
                        <button className="w-[144px] h-[61px] rounded-[20px] font-semibold text-[#316887] border border-[#316887]">View more</button>
                    </Link>
                </div>

                <div className="relative mr-[109px]">
                    <img className="w-[331px] h-[356px]" src="/img/image/camera_banner_home.png" alt="Camera Banner" />
                    <div className="absolute right-0 bottom-[50px] w-[120px] h-[114px] font-semibold text-[22px] text-center text-white bg-[#EDA415] rounded-full flex items-center justify-center">
                        <div>
                            only<br /> $89
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner