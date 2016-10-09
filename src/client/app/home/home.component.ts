import { Component, OnInit } from '@angular/core';
import { ISetting } from '../shared/services/setting';
import {SettingsService} from '../shared/services/settings.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  nopayOn: boolean = true;
  robodocOn: boolean = false;
  ePrescribeOn: boolean = false;
  couponsOn: boolean = false;
  nopaySlider = {checked: true};
  robodocSlider = {checked: true};
  ePrescribeSlider = {checked: true};
  couponsSlider = {checked: true};
  settings: ISetting[];
  pageTitle: string = 'Layout Text Settings';


  
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(private _settingsService: SettingsService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    // this.getNames();
    this.nopaySlider.checked = this.nopayOn;
    this.robodocSlider.checked = this.robodocOn;
    this.ePrescribeSlider.checked = this.ePrescribeOn;
    this.couponsSlider.checked = this.couponsOn;
    this._settingsService.getSettingsByGroup('layout_text')
        .subscribe(
          settings => this.settings = settings,
          error =>  this.errorMessage = <any>error);
  }

  
  
  
  
  
  
  
  
  
  
  
  
  /**
   * Handle the nameListService observable
   
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error =>  this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }
  */

}
