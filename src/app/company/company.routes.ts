import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

export const routes: Routes = [
  { path: 'list', component: CompanyListComponent },
  { path: 'edit/:id', component: CompanyEditComponent }
];
