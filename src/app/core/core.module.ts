import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule, InjectionToken } from '@angular/core';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer, routerStateConfig, clearState, AppState } from './ngrx';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'root reducer',
);
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { RecipeEffect } from './ngrx/effects/recipe.effect';
import { SpecialEffect } from './ngrx/effects/special.effect';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers: [clearState] }),
    EffectsModule.forRoot([
        RecipeEffect,
        SpecialEffect
    ]),
    StoreDevtoolsModule.instrument({
      name: 'Crescendo Recipes',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: appReducer,
    },
  ],
})
export class CoreModule {
  constructor() {}
}