import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgSelectModule } from '@ng-select/ng-select';

import { MaterialModules } from './material';

const SHARED_MODULES = [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    AngularFontAwesomeModule,
    NgSelectModule
]

@NgModule({
  imports: [
    CommonModule,
    ...SHARED_MODULES
  ],
  exports : SHARED_MODULES,
  declarations: []
})
export class SharedModule { }
