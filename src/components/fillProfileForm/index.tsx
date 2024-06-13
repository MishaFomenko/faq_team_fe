import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel } from 'react-tabs';
import StepFinished from 'assets/icons/steps/step_finished';
import {
  iconsActive,
  iconsInactive,
  tabs,
} from 'components/fillProfileForm/constants';
import { StyledButton } from 'components/fillProfileForm/sharedStyles';
import {
  ButtonsContainer,
  StyledTabs,
  TabsContainer,
  TabsHeader,
  TabsSection,
} from 'components/fillProfileForm/styles';
import { ButtonVariant } from 'components/fillProfileForm/types';
import { v4 as uuidv4 } from 'uuid';

const firstTabIndex = 0;

const FillProfileForm = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(firstTabIndex);

  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeader>{t('fillProfile.header')}</TabsHeader>
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

          {tabs.map((tab, index) => (
            <TabPanel key={uuidv4()}>
              <div>{tab}</div>
              <ButtonsContainer>
                {index > firstTabIndex && (
                  <StyledButton
                    variant={ButtonVariant.White}
                    onClick={() => setSelectedIndex(index - 1)}
                  >
                    {t('fillProfile.prevButton')}
                  </StyledButton>
                )}
                {index < tabs.length - 1 && (
                  <StyledButton
                    key={uuidv4()}
                    variant={ButtonVariant.Black}
                    onClick={() => setSelectedIndex(index + 1)}
                  >
                    {t('fillProfile.nextButton')}
                  </StyledButton>
                )}
              </ButtonsContainer>
            </TabPanel>
          ))}
        </StyledTabs>
      </TabsContainer>
    </TabsSection>
  );
};

export default FillProfileForm;