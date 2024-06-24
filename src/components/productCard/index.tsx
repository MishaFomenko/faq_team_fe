import AddToCartIcon from 'assets/icons/addToCartIcon.tsx';
import Carousel from 'components/carousel';
import {
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  VendorName,
} from 'components/productCard/styles.ts';

const ProductCard = ({ product, fullName }) => {
  return (
    <li>
      <ProductImageWrapper>
        <Carousel />
      </ProductImageWrapper>
      <ProductName>{product.product_name}</ProductName>
      <ProductInfo>
        <div>
          <ProductPrice>$ {product.price}</ProductPrice>
          <VendorName>{fullName}</VendorName>
        </div>
        <div>
          <AddToCartIcon></AddToCartIcon>
        </div>
      </ProductInfo>
    </li>
  );
};

export default ProductCard;
