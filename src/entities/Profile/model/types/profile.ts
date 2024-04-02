import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  form?: Profile;
  error?: string;
  readonly: boolean;
}
