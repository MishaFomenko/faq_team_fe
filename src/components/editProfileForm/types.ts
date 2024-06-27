export type Inputs = {
  avatar?: File | string | null;
  name?: string;
  email?: string;
  phone?: string;
  clothes?: string;
  shoes?: number;
  jeans?: string;
  addressOne?: string;
  addressTwo?: string | undefined;
  country?: string;
  states?: string;
  cities?: string;
};

export type ResponseCardInfo = {
  cardBrand: string;
  lastFourDigits: string;
};
