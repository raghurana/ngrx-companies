import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { routes as CompanyRoutes } from './company.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CompanyRoutes)
  ],
  declarations: [CompanyListComponent],
  providers: []
})
export class CompanyModule { }
