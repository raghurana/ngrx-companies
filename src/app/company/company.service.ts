
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Company } from './models/company';

@Injectable()
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: Http) { }

  getCompanies(): Observable<Company[]> {
    return this
      .http
      .get(`${this.API_BASE}/company`)
      .pipe(
          map(data => data.json()),
          catchError(this.errorHandler)
      );
    }

  errorHandler(error) {
    console.error('Api Error');
    return Observable.throw(error);
  }

}
