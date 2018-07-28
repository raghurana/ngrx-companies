import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CompanyActions from '../actions/company.actions';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CompanyActions.LoadCompaniesAction());
    this.companies$ = this.store.select(state => state.companyData.companies);
  }

}
