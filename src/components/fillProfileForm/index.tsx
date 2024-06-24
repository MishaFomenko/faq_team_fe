import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel } from 'react-tabs';
import { useGetUserQuery } from 'redux/authApiSlice';
import { useAppSelector } from 'redux/hooks';
import { v4 as uuidv4 } from 'uuid';

import StepFinished from 'assets/icons/steps/step_finished';
import {
  iconsActive,
  iconsInactive,
  tabs,
} from 'components/fillProfileForm/constants';
import {
  StyledTabs,
  TabsContainer,
  TabsHeader,
  TabsSection,
} from 'components/fillProfileForm/styles';

const FillProfileForm = () => {
  const { t } = useTranslation();
  const userId = useAppSelector(state => state.auth.user.id);
  console.log(userId);
  const { data, refetch } = useGetUserQuery(userId);
  console.log(data);

  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);

  useEffect(() => {
    setSelectedIndex(data?.filled_profile_step);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [selectedIndex, refetch]);

  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeader>{t('fillProfile.header')}</TabsHeader>
        {data && (
          <StyledTabs selectedIndex={selectedIndex} onSelect={() => {}}>
            <TabList>
              {tabs.map((tab, index) => (
                <Tab
                  key={uuidv4()}
                  className={
                    index < selectedIndex + 1
                      ? 'react-tabs__tab--before-selected'
                      : 'react-tabs__tab'
                  }
                >
                  {index < selectedIndex && <StepFinished />}
                  {index === selectedIndex && iconsActive[index]}
                  {index > selectedIndex && iconsInactive[index]}
                  <p>{t(`fillProfile.tab${index + 1}`)}</p>
                </Tab>
              ))}
            </TabList>

            {tabs.map((Component, index) => (
              <TabPanel key={uuidv4()}>
                <div>{Component({ setSelectedIndex, index, data })}</div>
              </TabPanel>
            ))}
          </StyledTabs>
        )}
      </TabsContainer>
    </TabsSection>
  );
};

export default FillProfileForm;
