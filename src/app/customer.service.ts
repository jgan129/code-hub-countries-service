import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  countries: any;

  private readonly endpoint = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient
  ) { }

  getCountries() : Observable<any> {
    return this.http.get<any>(this.endpoint)
  }
}
