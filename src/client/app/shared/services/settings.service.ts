import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';


import { ISetting } from './setting';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SettingsService {
  private _settingsUrl = 'api/settings/settings.json';

  constructor(private _http: Http) {
  }

  getAllSettings(): Observable<ISetting[]> {

    return this._http.get(this._settingsUrl)
            .map((response: Response) => <ISetting[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
  }

  getAuthenticationSettings(): Observable<ISetting[]> {
      return this.getAllSettings()
           .map((settings: ISetting[]) => settings.filter(s => s.settingGroup === 'auth_service'));
  }

  getSettingsByGroup(group: string): Observable<ISetting[]> {
      return this.getAllSettings()
           .map((settings: ISetting[]) => settings.filter(s => s.settingGroup === group));
  }  

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
