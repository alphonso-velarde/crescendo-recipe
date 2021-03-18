//import { AuthActionTypes } from './actions/auth.actions';
import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  recipe: reducers.Recipe;
  special: reducers.Special
}

export const INITIAL_STATE: AppState = {
  recipe: reducers.RECIPE_INITIAL_STATE,
  special: reducers.SPECIAL_INITIAL_STATE
};

export const appReducer: ActionReducerMap<AppState> = {
  recipe: reducers.RecipeReducer,
  special: reducers.SpecialReducer
};

export function clearState(reducer) {
  return function(state, action) {
    // if (action.type === AuthActionTypes.LOGOUT) {
    //   state = INITIAL_STATE;
    // }

    return reducer(state, action);
  };
}

export const routerStateConfig = {
  stateKey: 'router', // state-slice name for routing state
};

export * from './actions';
export * from './reducers';
// export * from './effects';
