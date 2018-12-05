import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SelectedCityComponent } from './components/ui/selected-city/selected-city.component';
import { SearchCityFormComponent } from './components/forms/search-city-form/search-city-form.component';
import { CapitalsListComponent } from './components/lists/capitals-list/capitals-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedCityComponent,
    SearchCityFormComponent,
    CapitalsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
