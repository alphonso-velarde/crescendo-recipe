import {
    SpecialAction,
    SpecialActionTypes,
  } from '../actions/special.action';
  
  export interface Special {
    specials:any,
    pending: any;
    error: any;
  }
  
  export const SPECIAL_INITIAL_STATE: Special = {
    specials:[],
    pending: false,
    error: null
  };
  
  export const SpecialReducer = (
    state: Special = SPECIAL_INITIAL_STATE,
    action: SpecialAction,
  ): Special => {
    switch (action.type) {
      case SpecialActionTypes.GET_SPECIALS:
        return {
          ...state,
          pending: true,
        };
      case SpecialActionTypes.GET_SPECIALS_SUCCESS:
        return {
            ...state,
            specials:action.payload,
            pending: false,
        };
      case SpecialActionTypes.GET_SPECIALS_FAIL:
          return {
              ...state,
              pending: false,
              error: action.payload
          };
      default:
        return state;
    }
  };
  