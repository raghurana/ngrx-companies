import { Company } from './company';

export interface CompanyState {
  companies: Company[];
}

export const initialState: CompanyState = {
  companies: []
};

