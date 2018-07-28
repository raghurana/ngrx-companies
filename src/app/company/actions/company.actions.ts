import { Action } from '@ngrx/store';
import { Company } from '../models/company';

export const LOAD_COMPANIES = 'LOAD_COMPANIES;';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS;';

export class LoadCompaniesAction implements Action {
    readonly type = LOAD_COMPANIES;
    constructor() {}
}

export class LoadCompaniesSuccessAction implements Action {
  readonly type = LOAD_COMPANIES_SUCCESS;
  constructor(public payload: Company[]) {}
}

export type CompanyActions =
  LoadCompaniesAction |
  LoadCompaniesSuccessAction;
