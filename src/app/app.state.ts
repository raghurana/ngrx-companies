import { Company } from './company/models/company';


export interface AppState {
  companyData: { companies: Company[] };
}
