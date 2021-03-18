import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import {HomeRoutingModule} from './home.routing.module';
import * as fromComponents from './components';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    ...fromComponents.components,
  ],
  providers: [],
  entryComponents: [],
})
export class HomeModule {}
