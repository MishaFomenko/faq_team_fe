import { ResponseCardInfo } from 'components/editProfileForm/types.ts';
import { countriesOptions } from 'const/constants';

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
}
export enum ButtonVariant {
  Black = 'black',
  White = 'white',
}

export interface UserData {
  address: string | null;
  address_2: string | null;
  avatar: string | null;
  city: string | null;
  cloth_size: string | null;
  country: string;
  created_at: Date;
  email: string;
  filled_profile_step: number | null;
  full_name: string | number | readonly string[] | undefined;
  id: string;
  is_deleted_by_admin: boolean;
  is_verified: boolean;
  jeans_size: string | null;
  otp_code: string | null;
  payment_method_id: string | null;
  phone: string | null;
  shoes_size: number | null;
  state: string | null;
  stripe_id: string | null;
  updated_at: Date;
  user_reviews: string[] | null;
  user_role: string | null;
  user_status: string | null;
  cardBrand: string;
  lastFourDigits: string;
}

export interface TabProps {
  setSelectedIndex: (index: number) => void;
  index?: number;
  data: ResponseCardInfo;
}

export interface Sizes {
  clothSize?: string;
  shoeSize?: number;
  jeansSize?: string;
}

export const enum UserRoles {
  Buyer = 'buyer',
  Vendor = 'vendor',
}

export interface RoleFormData {
  role?: string;
}

export interface GeneralInfoSchema {
  image?: FileList;
  phone?: string;
}

export type Country = (typeof countriesOptions)[number];

export interface AddressSchema {
  address1?: string;
  address2?: string;
  country?: Country;
  state?: unknown;
  city?: unknown;
}
