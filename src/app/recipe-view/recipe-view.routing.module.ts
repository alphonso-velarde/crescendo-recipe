import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeViewComponent } from './recipe-view.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [],
    component: RecipeViewComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeViewRoutingModule {}
