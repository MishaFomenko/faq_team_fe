import React from 'react';
import { useTranslation } from 'react-i18next';

import { maxRange, minRange } from 'const/constants';

import ColorSelector from './colorSelector';
import DualRangeSlider from './priceRange';
import SizeSelector from './sizeSelector';
import { Actions, FilterWrapper, Section, SectionTitle } from './styles';
import StyleSelector from './styleSelector';

type FilterProps = {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
  selectedSize: string | null;
  setSelectedSize: (size: string | null) => void;
  selectedStyle: string | null;
  setSelectedStyle: (style: string | null) => void;
  handleApply: () => void;
};

const Filter: React.FC<FilterProps> = ({
  priceRange,
  setPriceRange,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  selectedStyle,
  setSelectedStyle,
  handleApply,
}) => {
  const { t } = useTranslation();

  const handleClear = () => {
    setSelectedColor(null);
    setSelectedSize(null);
    setSelectedStyle(null);
    setPriceRange([minRange, maxRange]);
  };

  return (
    <FilterWrapper>
      <Section>
        <SectionTitle>{t('productsFilter.price')}</SectionTitle>
        <DualRangeSlider
          min={minRange}
          max={maxRange}
          minValue={priceRange[0]}
          maxValue={priceRange[1]}
          onChange={(min, max) => setPriceRange([min, max])}
        />
        <div className="price-range">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </Section>
      <Section>
        <SectionTitle>{t('productsFilter.color')}</SectionTitle>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </Section>
      <Section>
        <SectionTitle>{t('productsFilter.size')}</SectionTitle>
        <SizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </Section>
      <Section>
        <SectionTitle>{t('productsFilter.style')}</SectionTitle>
        <StyleSelector
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />
      </Section>
      <Actions>
        <button type="button" onClick={handleApply}>
          {' '}
          {t('productsFilter.apply')}
        </button>
        <button type="button" onClick={handleClear}>
          {t('productsFilter.clear')}
        </button>
      </Actions>
    </FilterWrapper>
  );
};

export default Filter;
