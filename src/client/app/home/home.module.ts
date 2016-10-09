import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NameListService } from '../shared/name-list/index';
import {SettingsService} from '../shared/services/settings.service';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService, SettingsService]
})
export class HomeModule { }
