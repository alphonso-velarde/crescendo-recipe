import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as fromAngularMaterial from './material.config';
import * as fromComponents from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsHelper } from './icons.helper';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    ...fromAngularMaterial.modules,
  ],
  declarations: [
    ...fromComponents.components,
  ],
  exports: [
    CommonModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    ...fromAngularMaterial.modules,
    ...fromComponents.components,
  ],
  providers: [...fromAngularMaterial.providers, IconsHelper],
})
export class SharedModule {
  constructor(private iconsHelper: IconsHelper) {
    this.iconsHelper.installIcons();
  }
}
