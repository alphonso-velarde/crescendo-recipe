import { Action } from '@ngrx/store';

export const enum RecipeActionTypes {
  GET_RECIPES = '[Recipe] Get recipes',
  GET_RECIPES_SUCCESS = '[Recipe] Get recipe success',
  GET_RECIPES_FAIL = '[Recipe] Get recipe fail',
  SET_SELECTED_RECIPE = '[Recipe] Set selected recipe fail',
}

interface GetRecipe extends Action {
  type: RecipeActionTypes.GET_RECIPES;
  payload: any;
}

interface GetRecipeSuccess extends Action {
  type: RecipeActionTypes.GET_RECIPES_SUCCESS;
  payload: any;
}

interface GetRecipeFail extends Action {
  type: RecipeActionTypes.GET_RECIPES_FAIL;
  payload: any;
}

interface SetSelectedRecipe extends Action {
  type: RecipeActionTypes.SET_SELECTED_RECIPE;
  payload: any;
}


export type RecipeAction =
  GetRecipe |
  GetRecipeSuccess |
  GetRecipeFail |
  SetSelectedRecipe;
