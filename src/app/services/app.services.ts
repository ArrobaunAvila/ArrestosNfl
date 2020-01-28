import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroes } from '../moviesXdata/heroes';
import { superHeroes } from '../moviesXdata/superHeroes';

@Injectable()
export class AppServices {
  public arrayObjectHeroes: Array<Heroes>;
  public objectHeroes: any = superHeroes;
  private urlHttp: string;

  constructor(private _http: HttpClient) {
   this.arrayObjectHeroes = [
    new Heroes(this.objectHeroes.secretBase, this.objectHeroes.formed, this.objectHeroes.homeTown, this.objectHeroes.members)
   ];
   this.urlHttp = 'http://nflarrest.com/';
  }

  getMembersHeroes() {
  return this.arrayObjectHeroes[0].members;
  }

  getTopCrimes(): Observable<any> {
   return this._http.get(this.urlHttp + 'api/v1/crime');
  }

}
