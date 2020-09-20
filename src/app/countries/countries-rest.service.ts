import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from './model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesRestService {

  countries: Country[];

  private readonly endpoint = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient
  ) { }

  getCountries() : Observable<Country[]> {
    return this.http.get<Country[]>(this.endpoint)
  }

}
