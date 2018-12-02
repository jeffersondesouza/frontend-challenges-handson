import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeShorterComponent } from './components/home-shorter/home-shorter.component';
import { TopLinksComponent } from './components/top-links/top-links.component';
import { HintsComponent } from './components/hints/hints.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShorterLinkFormComponent } from './components/ui/shorter-link-form/shorter-link-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeShorterComponent,
    TopLinksComponent,
    HintsComponent,
    FooterComponent,
    ShorterLinkFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
