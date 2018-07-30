import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CompanyActions from '../actions/company.actions';
import { Observable } from '../../../../node_modules/rxjs';
import { CompanyState } from '../models/company.state';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companyState$: Observable<CompanyState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CompanyActions.LoadCompaniesAction());
    this.companyState$ = this.store.select(state => state.companyState);
  }

  onDeleteCompany(companyId: number) {
    this.store.dispatch(new CompanyActions.DeleteCompanyAction(companyId));
  }

}
