import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesBoardComponent } from './countries-board/countries-board.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CountriesBoardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CountriesBoardComponent]
})
export class CountriesModule { }
