import { Component, OnInit } from '@angular/core';
import { AppState, RecipeActionTypes, SpecialActionTypes } from '../core/ngrx';
import { Store, select, State } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.styl'],
})
export class RecipeViewComponent implements OnInit {
  getRecipe$: any;
  recipe: any;
  recipeId: any;
  fullImg: any;
  getSpecial$: any;
  specials: any = [];
  isLoaded = false;
  constructor(public store: Store<AppState>, private route: ActivatedRoute) {
    this.recipeId = this.route.snapshot.params.id;
    this.getRecipe$ = this.store.pipe(select((state) => state.recipe));
    this.getRecipe$.subscribe((data) => {
      if (data.recipes.length > 0) {
        this.recipe = data.recipes.find((x) => x.uuid === this.recipeId);
        this.fullImg = environment.photoUrl + this.recipe.images.full;
        this.store.dispatch({
          type: SpecialActionTypes.GET_SPECIALS,
        });
      } else if (data.recipes.length == 0 && !data.pending) {
        this.store.dispatch({
          type: RecipeActionTypes.GET_RECIPES,
        });
      }
    });
    this.getSpecial$ = this.store.pipe(select((state) => state.special));
    this.getSpecial$.subscribe((data) => {
      if (data.specials.length > 0) {
        let _this = this;
        this.specials = [];
        data.specials.filter(function (special) {
          return _this.recipe.ingredients.some(function (recipe) {
            if (special.ingredientId === recipe.uuid) {
              let activeSpecial = Object.assign({}, special);
              activeSpecial.name = recipe.name;
              _this.specials.push(activeSpecial);
            }
          });
        });
        this.isLoaded = data.pending ? false : true;
      }
    });
  }

  ngOnInit(): void {}
}
