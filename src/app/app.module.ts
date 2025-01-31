import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { CountriesBoardComponent } from './countries/countries-board/countries-board.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CountriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

