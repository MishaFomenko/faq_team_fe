import { useTranslation } from 'react-i18next';
import { useGetUsersQuery } from 'redux/superAdminApiSlice';

import FiltersIcon from 'assets/icons/filtersIcon';
import { TopVendorsList } from 'components/topVendorsList';

import {
  FiltersWrap,
  StyledSearchbar,
  TopVendorsSection,
  TopVendorsSectionWrap,
  TopVendorsTitleSection,
  VendorsListtWrap,
} from './styles';

const TopVendorsPage = () => {
  const { t } = useTranslation();
  const { data } = useGetUsersQuery({
    page: 1,
    limit: 10,
    search: '',
    order: 'ASC',
    role: 'vendor',
  });

  return (
    <>
      <TopVendorsTitleSection>
        <div className="mobile-wrap">
          <p>{t('topVendors.title')}</p>
          <button>
            <FiltersIcon />
          </button>
        </div>
      </TopVendorsTitleSection>
      <TopVendorsSection>
        <TopVendorsSectionWrap>
          <FiltersWrap>
            <p>Filters</p>
          </FiltersWrap>
          <VendorsListtWrap>
            <StyledSearchbar>Searchbar</StyledSearchbar>
            {data && <TopVendorsList data={data} />}
          </VendorsListtWrap>
        </TopVendorsSectionWrap>
      </TopVendorsSection>
    </>
  );
};

export default TopVendorsPage;
