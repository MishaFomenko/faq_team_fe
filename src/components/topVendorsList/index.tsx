import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BuyIcon from 'assets/icons/iconBuy';
import defaultAvatar from 'assets/images/default-avatar.png';
import productImg from 'assets/images/product.png';

import {
  ImgWrap,
  ProductCardBottom,
  ProductName,
  ProductPrice,
  ProductsList,
  VendorCardName,
  VendorImg,
  VendorName,
  VendorsListItem,
} from './styles';

export const TopVendorsList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.users.map((vendor, id) => {
        return (
          <VendorsListItem key={id}>
            <ImgWrap>
              <VendorImg
                src={vendor.avatar ? vendor.avatar : defaultAvatar}
                alt="vendor-avatar"
              />
              <VendorName>{vendor.full_name}</VendorName>
            </ImgWrap>

            <ProductsList>
              <Swiper
                modules={[Navigation]}
                navigation={true}
                breakpoints={{
                  450: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  880: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1440: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                  },
                }}
                style={{ width: '100%', height: 'auto' }}
              >
                {vendor.products.map((product, id) => {
                  return (
                    <SwiperSlide key={id}>
                      <li>
                        <img src={product.img || productImg} alt="product" />
                        <ProductCardBottom>
                          <div>
                            <ProductName>{product.product_name}</ProductName>
                            <ProductPrice>{product.price}</ProductPrice>
                            <VendorCardName>{vendor.full_name}</VendorCardName>
                          </div>
                          <button type="button">
                            <BuyIcon />
                          </button>
                        </ProductCardBottom>
                      </li>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ProductsList>
          </VendorsListItem>
        );
      })}
    </ul>
  );
};
