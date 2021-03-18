import { Action } from '@ngrx/store';

export const enum SpecialActionTypes {
  GET_SPECIALS = '[Special] Get recipes',
  GET_SPECIALS_SUCCESS = '[Special] Get recipe success',
  GET_SPECIALS_FAIL = '[Special] Get recipe fail',
}

interface GetSpecial extends Action {
  type: SpecialActionTypes.GET_SPECIALS;
  payload: any;
}

interface GetSpecialSuccess extends Action {
  type: SpecialActionTypes.GET_SPECIALS_SUCCESS;
  payload: any;
}

interface GetSpecialFail extends Action {
  type: SpecialActionTypes.GET_SPECIALS_FAIL;
  payload: any;
}


export type SpecialAction =
  GetSpecial |
  GetSpecialSuccess |
  GetSpecialFail;
