import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  takeUntil,
  switchMap,
} from 'rxjs/operators';

import { RecipeService } from '../../services';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import { RecipeActionTypes } from '../actions/recipe.action';
import { State } from '@ngrx/store';
import { AppState } from '..';

@Injectable()
export class RecipeEffect {
  constructor(
    private recipeService: RecipeService,
    private actions$: Actions,
    public state: State<AppState>,
  ) {}

  getRecipe = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActionTypes.GET_RECIPES),
      switchMap(() => {
        return this.recipeService.getRecipes().pipe(
          map(data => {
            return {
              type: RecipeActionTypes.GET_RECIPES_SUCCESS,
              payload: data
            };
          }),
          catchError(err =>
            of({
              type: RecipeActionTypes.GET_RECIPES_FAIL,
              payload: err,
            }),
          ),
        );
      }),
    ),
  )
}
