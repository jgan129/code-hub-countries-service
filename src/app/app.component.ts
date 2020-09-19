import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-hub-problem-solution';
  countries: any[];

  constructor(private CustomerService: CustomerService) {
    CustomerService.getCountries().subscribe((data: any[]) => {
      this.countries = data;
      console.log(this.countries);
    });;
  }
}
