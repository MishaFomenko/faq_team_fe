import { ChangeEvent, useEffect, useState } from 'react';
import { ESort } from 'enums/sortEnum';
import { useGetProductsQuery } from 'redux/productsApiSlice';

import Filter from 'components/productsFilters';
import ProductsList from 'components/productsList';
import SearchInput from 'components/searchInput';

import { HomeSection } from './styles';
/// TODO should be moved to product page

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit] = useState<number>(5);
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [order, setOrder] = useState<ESort.ASC | ESort.DESC>(ESort.ASC);
  const { data, refetch } = useGetProductsQuery({
    search: debouncedSearch,
    page: currentPage,
    limit: limit,
    order,
  });
  const products = data?.products ?? [];
  console.log(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    refetch();
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSortChange = () => {
    setOrder(order === ESort.ASC ? ESort.DESC : ESort.ASC);
  };

  return (
    <HomeSection>
      <div className="flex-container">
        <div className="left">
          <Filter />
        </div>
        <div className="right">
          <SearchInput
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
          <div className="sorting">
            <button onClick={handleSortChange} className="sort-btn">
              sort
            </button>
          </div>
          <div className="products">
            {/* {products.map(product => ( */}
            <div>
              {/* <div>{product.product_name}</div> */}
              <ProductsList userProducts={products} />
            </div>
            {/* ))} */}
          </div>
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      </div>
    </HomeSection>
  );
};

export default HomePage;
