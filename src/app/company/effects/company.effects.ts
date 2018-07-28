import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CompanyService } from '../company.service';
import * as CompanyActions from '../actions/company.actions';
import { switchMap, map } from 'rxjs/operators';

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

  private getApiCompanyData() {
    return this.companyService
      .getCompanies()
      .pipe(
        map(
          apiCompanyData =>
            new CompanyActions.LoadCompaniesSuccessAction(apiCompanyData)
        )
      );
  }
}
