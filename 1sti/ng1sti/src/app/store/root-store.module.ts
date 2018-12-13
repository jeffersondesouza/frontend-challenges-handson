import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { CapitalsStoreModule } from './capitals/store.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    CapitalsStoreModule
  ],
})
export class RootStoreModule { }
