import { Company } from './company';

export interface CompanyState {
  loading: boolean;
  companies: Company[];
  errorMessage?: string;
}

export const initialState: CompanyState = {
  loading: false,
  companies: []
};

