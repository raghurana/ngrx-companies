import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CompanyService } from '../company.service';
import * as CompanyActions from '../actions/company.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CompanyEffects {
  constructor(
    private action$: Actions,
    private companyService: CompanyService
  ) {}

  @Effect()
  loadCompanies$ = this.action$
    .ofType(CompanyActions.LOAD_COMPANIES)
    .pipe(switchMap(() => this.getApiCompanyData()));

  @Effect()
  deleteCompany$ = this.action$
    .ofType(CompanyActions.DELETE_COMPANY)
    .pipe(switchMap((action: CompanyActions.DeleteCompanyAction) => this.deleteCompanyById(action.payload)));

  private getApiCompanyData() {
    return this
      .companyService
      .getCompanies()
      .pipe(
        map(data => new CompanyActions.LoadCompaniesSuccessAction(data)),
        catchError(err => of(new CompanyActions.LoadCompaniesFailedAction(err)))
      );
  }

  private deleteCompanyById(companyId: number) {
    return this
      .companyService
      .deleteCompany(companyId)
      .pipe(map((company) => new CompanyActions.DeleteCompanySuccessAction(company.id)));
  }
}
