import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyListComponent } from './company-list/company-list.component';
import { routes as CompanyRoutes } from './company.routes';
import { CompanyListItemComponent } from './company-list-item/company-list-item.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CompanyRoutes)
  ],
  declarations: [CompanyListComponent, CompanyListItemComponent, CompanyEditComponent],
  providers: []
})
export class CompanyModule { }
