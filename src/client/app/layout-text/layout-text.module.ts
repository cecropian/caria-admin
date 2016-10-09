import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutTextComponent } from './layout-text.component';
import {SettingsService} from '../shared/services/settings.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LayoutTextComponent
  ],
  providers: [
    SettingsService
  ]
})
export default class LayoutTextModule {}
