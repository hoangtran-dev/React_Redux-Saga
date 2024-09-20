import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../../axios';


const ProductDetail = () => {
  const { id } = useParams(); 
  const { data: productDetail, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => instance.get(`/products/${id}`).then(res => res.data),
    enabled: !!id, 
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  // Nếu không có sản phẩm, hiển thị thông báo
  if (!productDetail) return <div>Product not found</div>;

  return (
    <div>

      <div className="w-[1310px] m-auto flex justify-between">
        <div className="w-1/2">
          <div className="w-full mb-[28px] border-2 rounded-[15px]">
            <img className="w-full h-[560px] object-cover" src={productDetail.image} alt={productDetail.name} />
          </div>
          <div className="grid grid-cols-2 gap-[14px] h-[157px]">
          </div>
        </div>

        <div className="w-1/2 ml-[20px] mb-[76px]">
          <div className="mb-[30px]">
            <p className="text-[29px] font-medium text-[#003F62] mb-[25px]">{productDetail.name}</p>
            <p className="text-[30px] font-semibold mb-[25px]">${productDetail.price}</p>
            <div className="flex items-center mb-[25px]">
              {[...Array(5)].map((_, i) => (
                <img key={i} className="w-[30px] h-[30px]" src="/img/icon/start_detail/vuesax/linear/star.svg" alt={`Star ${i + 1}`} />
              ))}
              <span className="ml-[9px] text-[13px] font-medium">No reviews</span>
            </div>
            <p className="text-[18px] font-medium mb-[25px]">Availability: <span className="text-[green]">In stock</span></p>
            <p className="text-[15px] text-[#5D5D5D] mb-[25px]">Hurry up! Only {productDetail.stock} products left in stock!</p>
            <div className="border mb-[30px]"></div>
            <div>
              <div className="flex mb-[28px]">
                <p className="mr-[30px] font-medium text-[18px]">Color:</p>
              </div>
              <div className="flex mb-[28px]">
                <p className="mr-[30px] font-medium text-[18px]">Size:...</p>
              </div>
              <div className="flex mb-[28px]">
                <p className="mr-[30px] font-medium text-[18px]">Quantity:</p>
                <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE]">-</button>
                <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE]">1</button>
                <button className="w-[63px] h-[32px] text-center border-black border-2 bg-[#EEEEEE]">+</button>
              </div>
              <div className="flex items-center justify-between">
                <button className="w-[241px] text-[22px] font-semibold h-[60px] bg-[#EDA415] text-white rounded-[25px]">Add to cart</button>
                <button className="w-[241px] text-[22px] font-semibold h-[60px] bg-[#EDA415] text-white rounded-[25px]">Buy it now</button>
                <button><img src="/img/icon/heart_detail.svg" alt="Add to Wishlist" /></button>
              </div>
            </div>
          </div>

          <div className="w-full text-left font-medium text-[18px] h-[150px] border-t-2 border-black flex flex-col justify-between">
            <p>Sku: <span>hahaha</span></p>
            <p>Category: <span className="ml-[10px]">{productDetail.category}</span></p>
            <div className="flex">
              <p>Share: </p>
              <div className="flex">
                <a className="ml-[30px]" href="#"><img src="/img/icon/google_footer_home/vuesax/linear/google.svg" alt="Google" /></a>
                <a className="ml-[30px]" href="#"><img src="/img/icon/fb_footer_home/vuesax/linear/vuesax/linear/facebook.svg" alt="Facebook" /></a>
                <a className="ml-[30px]" href="#"><img src="/img/icon/phone_footer_home/vuesax/linear/whatsapp.svg" alt="WhatsApp" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="m-auto w-[1310px] text-center mb-[34px]">
        <button className="mr-[20px] w-[187px] rounded-[15px] h-[60px] text-[20px] font-medium border">Description</button>
        <button className="w-[187px] rounded-[15px] h-[60px] text-[20px] text-white font-medium bg-[#003F62]">Description</button>
      </div>

      {/* Customer Reviews */}
      <div className="w-[1310px] h-[223px] border rounded-[10px] m-auto flex flex-col justify-between px-[100px] py-[40px] mb-[74px]">
        <p className="font-semibold text-[23px]">Customer reviews</p>
        <p>No reviews yet</p>
        <button className="w-[196px] h-[40px] text-white bg-[#003f62]">Write a review</button>
      </div>

      {/* Related Products */}
      <div className="m-auto w-[1310px]">
        <p className="text-[27px] font-semibold text-[#1B5A7D] mb-[62px]">Related products</p>
        <div className="grid grid-cols-4 gap-[26px] border-2 mb-[96px]">
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
