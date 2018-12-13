import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EffectsService } from './effects';
import { capitalsReducer } from './reducer';



@NgModule({
    imports: [
        StoreModule.forFeature('capitals', capitalsReducer),
        EffectsModule.forFeature([EffectsService])
    ],
    providers: [
        EffectsService,
    ]
})
export class CapitalsStoreModule { }
