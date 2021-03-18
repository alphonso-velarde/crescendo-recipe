import {
    RecipeAction,
    RecipeActionTypes,
  } from '../actions/recipe.action';
  
  export interface Recipe {
    recipes:any,
    selectedRecipe:any;
    pending: any;
    error: any;
  }
  
  export const RECIPE_INITIAL_STATE: Recipe = {
    recipes:[],
    selectedRecipe: {},
    pending: false,
    error: null
  };
  
  export const RecipeReducer = (
    state: Recipe = RECIPE_INITIAL_STATE,
    action: RecipeAction,
  ): Recipe => {
    switch (action.type) {
      case RecipeActionTypes.GET_RECIPES:
        return {
          ...state,
          pending: true,
        };
      case RecipeActionTypes.GET_RECIPES_SUCCESS:
        return {
            ...state,
            recipes:action.payload,
            pending: false,
        };
      case RecipeActionTypes.GET_RECIPES_FAIL:
          return {
              ...state,
              pending: false,
              error: action.payload
          };
      case RecipeActionTypes.SET_SELECTED_RECIPE:
        return {
            ...state,
            selectedRecipe: action.payload
        };
      default:
        return state;
    }
  };
  