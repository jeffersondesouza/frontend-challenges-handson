import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SelectedCityComponent } from './components/ui/selected-city/selected-city.component';
import { SearchCityFormComponent } from './components/forms/search-city-form/search-city-form.component';
import { CapitalsListComponent } from './components/lists/capitals-list/capitals-list.component';
import { environment } from '../environments/environment';
import { RootStoreModule } from './store/root-store.module';
import { CapitalsApiService } from './store/capitals/api.service';

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
    AppRoutingModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RootStoreModule,
  ],
  providers: [
    CapitalsApiService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
