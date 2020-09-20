import { Component, OnInit } from '@angular/core';
import { CountriesRestService } from '../countries-rest.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-countries-board',
  templateUrl: './countries-board.component.html',
  styleUrls: ['./countries-board.component.scss'],
  providers: [CountriesRestService]
})
export class CountriesBoardComponent implements OnInit {

  countries: Country[];

  constructor(private countriesRestService: CountriesRestService) {
  }

  ngOnInit() {
    this.countriesRestService.getCountries().subscribe((data: Country[]) => {
      this.countries = data;
      console.log(this.countries);
    });
  }
}
