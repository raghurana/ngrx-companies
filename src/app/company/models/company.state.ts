import { Company } from './company';

export interface CompanyState {
  loading: boolean;
  companies: Company[];
  errorMessage?: any;
}

export const initialState: CompanyState = {
  loading: false,
  companies: []
};

