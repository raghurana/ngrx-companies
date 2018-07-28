import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { routes as AppRoutes } from './app.routes';
import { companyReducer } from './company/reducers/company.reducer';
import { CompanyEffects } from './company/effects/company.effects';
import { CompanyService } from './company/company.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot({ companyData: companyReducer }),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
