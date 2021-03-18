import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  takeUntil,
  switchMap,
} from 'rxjs/operators';

import { SpecialService } from '../../services';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import { SpecialActionTypes } from '../actions/special.action';
import { State } from '@ngrx/store';
import { AppState } from '..';

@Injectable()
export class SpecialEffect {
  constructor(
    private specialService: SpecialService,
    private actions$: Actions,
    public state: State<AppState>,
  ) {}

  getSpecial = createEffect(() =>
    this.actions$.pipe(
      ofType(SpecialActionTypes.GET_SPECIALS),
      switchMap(() => {
        return this.specialService.getSpecials().pipe(
          map(data => {
            return {
              type: SpecialActionTypes.GET_SPECIALS_SUCCESS,
              payload: data
            };
          }),
          catchError(err =>
            of({
              type: SpecialActionTypes.GET_SPECIALS_FAIL,
              payload: err,
            }),
          ),
        );
      }),
    ),
  )
}
