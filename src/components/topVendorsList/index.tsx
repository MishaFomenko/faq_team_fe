import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import defaultAvatar from 'assets/images/default-avatar.png';
import FollowButton from 'components/followButton';
import ProductsList from 'components/productsList/index.tsx';
import { productCard } from 'const/constants.ts';
import { BtnWrapper } from 'pages/topVendorsPage/styles.ts';

import {
  ImgWrap,
  InfoWrapper,
  VendorImg,
  VendorName,
  VendorsListItem,
} from './styles';

export const TopVendorsList = ({ data }) => {
  return (
    <ul>
      {data.users.map((vendor, id) => {
        console.log(vendor);
        return (
          <VendorsListItem key={id}>
            '
            <InfoWrapper>
              <ImgWrap>
                <VendorImg
                  src={vendor.avatar ? vendor.avatar : defaultAvatar}
                  alt="vendor-avatar"
                />
                <VendorName>{vendor.full_name}</VendorName>
              </ImgWrap>
              <BtnWrapper>
                <FollowButton userId={vendor.id} />
              </BtnWrapper>
            </InfoWrapper>
            <ProductsList
              products={vendor.products}
              fullName={vendor.full_name}
              cardSize={productCard.size.small}
              gapSize={productCard.gap.medium}
            />
            {/*<ProductsList>*/}
            {/*  <Swiper*/}
            {/*    modules={[Navigation, Pagination]}*/}
            {/*    pagination={{ clickable: true }}*/}
            {/*    navigation={true}*/}
            {/*    breakpoints={{*/}
            {/*      450: {*/}
            {/*        slidesPerView: 2,*/}
            {/*        spaceBetween: 16,*/}
            {/*      },*/}
            {/*      880: {*/}
            {/*        width: 500,*/}
            {/*        slidesPerView: 3,*/}
            {/*        spaceBetween: 16,*/}
            {/*      },*/}
            {/*      1440: {*/}
            {/*        width: 900,*/}
            {/*        slidesPerView: 4,*/}
            {/*        spaceBetween: 32,*/}
            {/*      },*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    {vendor.products.map((product, id) => {*/}
            {/*      return (*/}
            {/*        <SwiperSlide key={id}>*/}
            {/*          <li>*/}
            {/*            <img src={product.img || productImg} alt="product" />*/}
            {/*            <ProductCardBottom>*/}
            {/*              <div>*/}
            {/*                <ProductName>{product.product_name}</ProductName>*/}
            {/*                <ProductPrice>{product.price}</ProductPrice>*/}
            {/*                <VendorCardName>{vendor.full_name}</VendorCardName>*/}
            {/*              </div>*/}
            {/*              <button type="button">*/}
            {/*                <BuyIcon />*/}
            {/*              </button>*/}
            {/*            </ProductCardBottom>*/}
            {/*          </li>*/}
            {/*        </SwiperSlide>*/}
            {/*      );*/}
            {/*    })}*/}
            {/*  </Swiper>*/}
            {/*</ProductsList>*/}
          </VendorsListItem>
        );
      })}
    </ul>
  );
};
