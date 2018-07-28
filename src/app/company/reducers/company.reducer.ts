import * as Actions from './../actions/company.actions';
import { initialState, CompanyState } from '../models/company.state';

export function companyReducer(state = initialState, action: Actions.CompanyActions): CompanyState {

  if (action.type === Actions.LOAD_COMPANIES_SUCCESS) {
    return state = {
      companies: action.payload
    };
  }

  return state;
}
