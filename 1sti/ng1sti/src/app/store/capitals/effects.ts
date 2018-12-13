import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';

import * as fromActions from './actions';

import { CapitalsApiService } from './api.service';

@Injectable()
export class EffectsService {


    @Effect()
    loadCapitals: Observable<Action> = this.actions$
        .pipe(
            ofType<fromActions.LoadCapitalsRequest>(fromActions.LOAD_CAPITALS_REQUEST),
            switchMap(action => this.apiService.loadCapitals()
                .pipe(
                    map(res => new fromActions.LoadCapitalsSucces({ capitals: res })),
                )


            )

        );

    constructor(
        private actions$: Actions,
        private apiService: CapitalsApiService
    ) { }

}
