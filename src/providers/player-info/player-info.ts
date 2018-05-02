import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlayerInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerInfoProvider {

  constructor(public http: Http) {
    console.log('Hello PlayerInfoProvider Provider');
  }

  getPlayerInfo():Observable<any>
{
  return this.http.get("https://jsonblob.com/api/jsonblob/5560ccea-4c97-11e8-917b-e7b69f7185b8").map(obj=>obj.json());
}
}
