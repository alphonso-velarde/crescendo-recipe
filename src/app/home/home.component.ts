import { Component, OnInit } from '@angular/core';
import { AppState, RecipeActionTypes, SpecialActionTypes} from '../core/ngrx';
import { Store, select, State } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  getRecipe$:any;
  recipes:any;
  isLoaded:any = false;
  constructor(public store: Store<AppState>) { 
    this.getRecipe$ = this.store.pipe(select(state => state.recipe));
    this.getRecipe$.subscribe(data => {
      if(data.recipes){
        this.recipes = data.recipes;
      }
      this.isLoaded = data.pending ? false : true;
    });
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: RecipeActionTypes.GET_RECIPES
    });
    this.store.dispatch({
      type: SpecialActionTypes.GET_SPECIALS
    });
  }
}
