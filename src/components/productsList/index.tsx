import ProductCard from 'components/productCard';
import { ProductsWrapper } from 'components/productsList/styles.ts';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';

const ProductsList = ({
  fullName,
  products,
  cardSize,
  gapSize,
}: Partial<PublicProfileInfoType>) => {
  return (
    <ProductsWrapper cardSize={cardSize!} gapSize={gapSize!}>
      <ul>
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              fullName={fullName || product.owner.full_name}
            />
          ))}
      </ul>
    </ProductsWrapper>
  );
};

export default ProductsList;
