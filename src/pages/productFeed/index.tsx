/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetProductsQuery,
  useLazyGetProductsQuery,
} from 'redux/productsApiSlice.ts';

import Filter from 'components/productsFilters';
import ProductsList from 'components/productsList';
import SearchInput from 'components/searchInput';
import {
  maxRange,
  minRange,
  productCard,
  showProductsLimit,
} from 'const/constants.ts';
import {
  AppliedFiltersWrapper,
  FilterSection,
  LoadMoreBtn,
  LoadMoreBtnWrapper,
  ProductFeedContainer,
  ProductsSection,
  SortSelect,
} from 'pages/productFeed/styles.ts';

import { ESort } from '../../enums/sortEnum.ts';
import { ResponseGetProduct } from '../../redux/types';

const productsText = 'products';

const ProductFeed = () => {
  const { t } = useTranslation();
  const [getProducts] = useLazyGetProductsQuery();
  const [products, setProducts] = useState<ResponseGetProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [priceRange, setPriceRange] = useState([minRange, maxRange]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // const [showOnlyMySizes, setShowOnlyMySizes] = useState<boolean>(false);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [order, setOrder] = useState<ESort.ASC | ESort.DESC>();
  const { data } = useGetProductsQuery({
    search: debouncedSearch,
    page,
    limit: showProductsLimit,
    // color: selectedColor!,
    // style: selectedStyle!,
    // size: selectedSize!,
    // min: priceRange[0],
    // max: priceRange[1],
    // order,
  });
  const [totalProducts, setTotalProducts] = useState<number | null>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => {
      clearTimeout(timer);
      setProducts([]);
    };
  }, [search]);

  useEffect(() => {
    const loadProducts = () => {
      try {
        setIsloading(true);
        setProducts([...products, ...data!.products]);
        setErrorMsg('');
        console.log(data);
      } catch (error) {
        setErrorMsg(t('errors.loadError'));
      } finally {
        setIsloading(false);
        setTotalProducts(data?.totalCount);
      }
    };
    loadProducts();
  }, [data, isLoading, products, t]);

  useEffect(() => {
    (async function () {
      const res = await getProducts({
        color: selectedColor!,
        size: selectedSize!,
        style: selectedStyle!,
        min: priceRange[0],
        max: priceRange[1],
        page: 1,
        limit: showProductsLimit,
        order,
      }).unwrap();
      setProducts(res.products);
      setTotalProducts(res.totalCount);
    })();
  }, [
    order,
    getProducts,
    selectedColor,
    selectedSize,
    selectedStyle,
    priceRange,
  ]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };
  const handleApply = async () => {
    // TODO add logic to send request with filters
    const res = await getProducts({
      color: selectedColor!,
      size: selectedSize!,
      style: selectedStyle!,
      min: priceRange[0],
      max: priceRange[1],
      page: 1,
      limit: showProductsLimit,
    }).unwrap();
    setProducts(res.products);
    setTotalProducts(res.totalCount);
  };
  const handleSort = async e => {
    const value = e.target.value;
    console.log(value);
    setOrder(e.target.value);
  };
  return (
    <ProductFeedContainer>
      <FilterSection>
        <Filter
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          handleApply={handleApply}
        />
      </FilterSection>
      <ProductsSection>
        <SearchInput
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
        <AppliedFiltersWrapper>
          <div>
            <p>
              {totalProducts} {productsText}
            </p>
            <ul></ul>
          </div>
          <SortSelect>
            <select name="sort" id="sort" onChange={handleSort}>
              <option value={''} selected disabled hidden>
                Apply sort
              </option>
              <option value={'ASC'}>lower price</option>
              <option value={'DESC'}>higher price</option>
            </select>
          </SortSelect>
        </AppliedFiltersWrapper>
        <ProductsList
          products={products}
          cardSize={productCard.size.large}
          gapSize={productCard.gap.medium}
        ></ProductsList>
        {errorMsg && <p>{errorMsg}</p>}
        <LoadMoreBtnWrapper>
          <LoadMoreBtn onClick={loadMore}>
            {isLoading ? t('loading.text') : t('loadMore.text')}
          </LoadMoreBtn>
        </LoadMoreBtnWrapper>
      </ProductsSection>
    </ProductFeedContainer>
  );
};

export default ProductFeed;
