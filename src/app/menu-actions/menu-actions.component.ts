import { Component, OnInit } from '@angular/core';
import { SuperHeroes } from '../moviesXdata/superHeroes';
import { Heroes } from '../moviesXdata/heroes';

@Component({
  selector: 'app-menu-actions',
  templateUrl: './menu-actions.component.html'
})

export class MenuActionsComponent implements OnInit {
  public arrayObjectHeroes: Array<Heroes>;
  public namesHeroes: Array<string>;
  public squadName: string;
  public since: string;
  public months: any[];
  public validator: boolean;
  constructor() {
    this.validator = false;
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    this.namesHeroes = new Array();
    this.squadName = SuperHeroes.squadName;
    this.arrayObjectHeroes = [
     new Heroes(SuperHeroes.secretBase, SuperHeroes.formed, SuperHeroes.homeTown, SuperHeroes.members)
   ];
    this.getNames();
  }
  ngOnInit() {
    console.log(this.arrayObjectHeroes[0]);
  }

  public getNames() {
  this.arrayObjectHeroes[0].members.forEach((element, index) => {
      if (this.namesHeroes.indexOf(element.name) < 0 &&  element.powers) {
        this.namesHeroes.push(element.name);
      }
  });
  console.log(this.namesHeroes);
  }

  public saveSince() {
    Object.assign(this.arrayObjectHeroes[0] , {since : this.since});
    console.log(this.arrayObjectHeroes[0]);
  }

  public deleteSuperHero(indice: string) {
    /*Formas de borrar un elemento de un array [delete and splice]*/
    this.arrayObjectHeroes[0].members.splice(Number(indice), 1);
  /*delete this.arrayObjectHeroes[0].members[indice];*/
    console.log(this.arrayObjectHeroes[0].members);
  }

  onBlur() {
    console.log('Ejecutando method onBlur()');
  }

  onKeyUp() {
    console.log('Ejecutando method onKeyUp()');
  }
}
