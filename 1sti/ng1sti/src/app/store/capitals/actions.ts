import { Action } from '@ngrx/store';

export const LOAD_CAPITALS_REQUEST = 'capitals:LOAD_CAPITALS_REQUEST';
export const LOAD_CAPITALS_SUCCESS = 'capitals:LOAD_CAPITALS_SUCCESS';
export const LOAD_CAPITALS_FAILURE = 'capitals:LOAD_CAPITALS_FAILURE';

export class LoadCapitalsRequest implements Action {
    readonly type = LOAD_CAPITALS_REQUEST;
}

export class LoadCapitalsSucces implements Action {
    readonly type = LOAD_CAPITALS_SUCCESS;
    constructor(public payload: { capitals }) { }
}

export class LoadCapitalsFailure implements Action {
    readonly type = LOAD_CAPITALS_FAILURE;
    constructor(public payload: { error: any }) { }
}

export type Actions = LoadCapitalsRequest
    | LoadCapitalsSucces
    | LoadCapitalsFailure;


