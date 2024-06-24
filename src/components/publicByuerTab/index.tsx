import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import ReviewsList from 'components/reviewsList';

const PublicBuyerTab = ({ userReviews }: Partial<PublicProfileInfoType>) => {
  const { t } = useTranslation();

  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab>
          {t('titleText.reviews')}({userReviews?.length})
        </Tab>
      </TabList>
      <TabPanel>
        <h2>
          {t('titleText.reviews')}({userReviews?.length})
        </h2>
        <ReviewsList userReviews={userReviews} />
      </TabPanel>
    </Tabs>
  );
};

export default PublicBuyerTab;
