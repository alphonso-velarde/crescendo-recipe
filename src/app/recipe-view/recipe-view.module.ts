import { NgModule } from '@angular/core';
import { RecipeViewComponent } from './recipe-view.component';
import { SharedModule } from '../shared/shared.module';
import {RecipeViewRoutingModule} from './recipe-view.routing.module';
import * as fromComponents from './components';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [SharedModule, RecipeViewRoutingModule, AgmCoreModule],
  declarations: [
    RecipeViewComponent,
    ...fromComponents.components,
  ],
  providers: [],
  entryComponents: [],
})
export class RecipeViewModule {}
