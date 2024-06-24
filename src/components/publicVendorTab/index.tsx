import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import ProductsList from 'components/productsList';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import ReviewsList from 'components/reviewsList';
import { productCard } from 'const/constants.ts';

import { useGetProductsQuery } from '../../redux/productsApiSlice.ts';

const PublicVendorTab = ({
  fullName,
  userReviews,
  products,
}: Partial<PublicProfileInfoType>) => {
  const [tabIndex, setTabIndex] = useState(1);
  const { t } = useTranslation();
  const { data } = useGetProductsQuery({ page: 1, limit: 10 });

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>
          {t('titleText.products')}({products?.length})
        </Tab>
        <Tab>
          {t('titleText.reviews')}({userReviews?.length})
        </Tab>
      </TabList>
      <TabPanel>
        <h2>{t('titleText.vendorCloset')}</h2>
        <ProductsList
          fullName={fullName}
          products={data?.products}
          cardSize={productCard.size.medium}
          gapSize={productCard.gap.large}
        />
      </TabPanel>
      <TabPanel>
        <h2>
          {t('titleText.reviews')}({userReviews?.length})
        </h2>
        <ReviewsList userReviews={userReviews} />
      </TabPanel>
    </Tabs>
  );
};

export default PublicVendorTab;
