import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { ISetting } from '../shared/services/setting';
import {SettingsService} from '../shared/services/settings.service';


@Component({
  selector: 'layout-text',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./layout-text.css')],
  template: require('./layout-text.html'),
  providers: [SettingsService]
})
export class LayoutTextComponent implements OnInit {
  pageTitle: string = 'Layout Text Settings';
  settings: ISetting[];
  errorMessage: string;

  constructor(private _settingsService: SettingsService) {

  }
  
  ngOnInit(): void {
    this._settingsService.getSettingsByGroup('layout_text')
        .subscribe(
          settings => this.settings = settings,
          error =>  this.errorMessage = <any>error);
  }

}
