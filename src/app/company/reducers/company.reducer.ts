import * as Actions from './../actions/company.actions';
import { initialState, CompanyState } from '../models/company.state';

export function companyReducer(state = initialState, action: Actions.CompanyActions): CompanyState {

  if (action.type === Actions.LOAD_COMPANIES_SUCCESS) {
    return state = {
      companies: action.payload
    };
  }

  if (action.type === Actions.DELETE_COMPANY_SUCCESS) {
    return state = {
      companies: state.companies.filter(c => c.id !== action.payload)
    };
  }

  return state;
}
