import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.styl']
})
export class RecipeComponent implements OnInit{
  @Input() recipe
  mediumImg:any

  ngOnInit(){
    this.mediumImg = environment.photoUrl + this.recipe.images.medium;
  }
}
