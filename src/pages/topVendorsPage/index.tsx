import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from 'redux/superAdminApiSlice';
import { useGetMeQuery } from 'redux/userApiSlice';

import FiltersIcon from 'assets/icons/filtersIcon';
import Filter from 'components/productsFilters';
import SearchInput from 'components/searchInput';
import { TopVendorsList } from 'components/topVendorsList';
import { maxRange, minRange } from 'const/constants.ts';

import {
  FiltersWrap,
  TopVendorsSectionWrap,
  TopVendorsTitleSection,
  TopVendorsWrapper,
  VendorsListtWrap,
} from './styles';

const TopVendorsPage = () => {
  const { t } = useTranslation();

  const { data: dataMe } = useGetMeQuery();
  const navigate = useNavigate();
  useEffect(() => {
    dataMe && dataMe.user_role !== 'buyer' && navigate(-1);
  }, [dataMe, navigate]);

  const { data } = useGetUsersQuery({
    page: 1,
    limit: 10,
    search: '',
    order: 'ASC',
    role: 'vendor',
  });

  const [priceRange, setPriceRange] = useState([minRange, maxRange]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // const [showOnlyMySizes, setShowOnlyMySizes] = useState<boolean>(false);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  // const handleApply = async () => {
  //   // TODO add logic to send request with filters
  //   const res = await getProducts({
  //     color: selectedColor!,
  //     size: selectedSize!,
  //     style: selectedStyle!,
  //     min: priceRange[0],
  //     max: priceRange[1],
  //     page: 1,
  //     limit: showProductsLimit,
  //   }).unwrap();
  //   setProducts(res.products);
  //   setTotalProducts(res.totalCount);
  // };

  return (
    <>
      {dataMe && dataMe.user_role === 'buyer' && (
        <>
          <TopVendorsTitleSection>
            <div className="mobile-wrap">
              <p>{t('topVendors.title')}</p>
              <button>
                <FiltersIcon />
              </button>
            </div>
          </TopVendorsTitleSection>
          <TopVendorsWrapper>
            <TopVendorsSectionWrap>
              <FiltersWrap>
                <Filter
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  selectedStyle={selectedStyle}
                  setSelectedStyle={setSelectedStyle}
                  // handleApply={handleApply}
                />{' '}
              </FiltersWrap>
              <VendorsListtWrap>
                <SearchInput placeholder={'search'} />
                {data && <TopVendorsList data={data} />}
              </VendorsListtWrap>
            </TopVendorsSectionWrap>
          </TopVendorsWrapper>
        </>
      )}
    </>
  );
};

export default TopVendorsPage;
