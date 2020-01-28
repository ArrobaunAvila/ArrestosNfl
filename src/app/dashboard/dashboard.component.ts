import { Component, OnInit } from '@angular/core';
import { Heroes } from '../moviesXdata/heroes';
import { superHeroes } from '../moviesXdata/superHeroes';
import { AppServices } from '../services/app.services';
import { Router , ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppServices]
})
export class DashboardComponent implements OnInit {

  public nombreHeroe: string;
  public saga: string;
  public rango: number;
  public identificado: boolean;
  public arrayMembers: Array<any> = [];

  public namesHeroes: Array<string>;
  private arrayObjectHero: Array<Heroes>; /*Realizamos un array de Objetos Heroes*/
  private objectHeroes: any = superHeroes; /*Objecto Json de heroes*/

  constructor(private _route: ActivatedRoute , private _router: Router, private objectServices: AppServices) {
  this.arrayObjectHero = this.objectServices.arrayObjectHeroes;
  this.arrayMembers = this.objectServices.getMembersHeroes();

  console.log(this.arrayObjectHero);
  this.namesHeroes = new Array();
  this.getNamesHeroes();
  this.identificado = false;
  }

 ngOnInit() {
  this._route.params.subscribe((params: Params) => {
    this.nombreHeroe = params.heroe;
    this.saga = params.saga;
    this.rango = +params.rango;
    console.log(params);
    });
  this.getSuperHeroDcComic();
  this.getTopCrimesNfl();
 }

 getNamesHeroes() {
  this.arrayMembers.forEach((element, index) => {
    this.namesHeroes.push(element.name);
  });
 }

 getSuperHeroDcComic() {
  const arrayHero = this.arrayMembers.filter(heroes => {
    return heroes.age > 28;
  });
  console.log(arrayHero);
 }

 getTopCrimesNfl() {
 this.objectServices.getTopCrimes().subscribe( response => {
    console.log(response);
 }, error => {
  console.log(error);
 });
 }

 loadMenuHeroes() {
   this._router.navigate(['/menuheroes']);
 }

 Inidentificate() {
   this.identificado = true;
 }

 unsetIdentificacion() {
   this.identificado = false;
 }

}
