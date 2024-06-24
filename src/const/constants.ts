export const otpFormVersions = {
  verifyEmail: 'register',
  newPass: 'newPass',
};

export const passLengthLim = 8;

export const otpExpirationTime = 55;
export const otpNumberOfDigits = 6;
export const clockPrecision = 1000;

export const userRoles = {
  vendor: 'vendor',
  buyer: 'buyer',
  superAdmin: 'superadmin',
};

export const stripePaymentCurrency = 'usd';

export const countriesOptions = ['Canada'] as const;
export const statesOptions = {
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
} as const;
export const citiesOptions = {
  Canada: ['Toronto', 'Montreal', 'Vancouver'],
} as const;

export const countryCodes = ['ca'];
export const phoneLength = 10;

export const imageFormat = '.png,.heic,.jpeg';

export const productCard = {
  size: {
    small: '15%',
    medium: '20%',
    large: '23%',
  },

  gap: {
    small: '10px',
    medium: '20px',
    large: '35px',
  },
};

export const shownTextLimit = 20;

export const showProductsLimit = 10;

export const minRange = 0;
export const maxRange = 10000;
