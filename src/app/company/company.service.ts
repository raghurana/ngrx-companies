import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { Company } from './models/company';

@Injectable()
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: Http) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get(`${this.API_BASE}/company`).pipe(
      delay(5000),
      map(data => data.json()),
      catchError(this.errorHandler)
    );
  }

  getCompanyById(companyId: number) {
    return this.http.get(`${this.API_BASE}/company/${companyId}`).pipe(
      map(data => data.json()),
      catchError(this.errorHandler)
    );
  }

  addCompany(company: Company) {
    const h = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: h });

    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), options).pipe(
      map(response => response.json()),
      catchError(this.errorHandler));
  }

  updateCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), options).pipe(
      map(response => response.json()),
      catchError(this.errorHandler));
  }

  deleteCompany(companyId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`).pipe(
      map(response => response.json()),
      catchError(this.errorHandler));
  }

  errorHandler(error) {
    console.error('Api Error');
    return throwError(error);
  }
}
