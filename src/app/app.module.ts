import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {DefaultLayoutComponent} from './default-layout/default-layout.component'
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCuTAo_yqiFKgcjpTDqg9eq1_OdPEhmYWw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
