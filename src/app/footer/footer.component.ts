import { Component, OnInit , DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector : 'app-footer',
  template : `
  <div class="container-footer">
  <h2 (mouseover)="changeTitleH2()">{{titleh2}}</h2>
  <a href="{{url}}" target="_planck">{{title}}</a>
  </div>
  `
})

export class FooterComponent implements OnInit , DoCheck, OnDestroy {
public titleh2 = 'Nfl EaSports';
public title = 'Visit Page Nfl';
public url = 'https://www.nfl.com';

    constructor() {
       console.log('Se ejecuta contructor FooterComponent');
    }

   ngOnInit() {
  console.log('Se ejecuta metodo ngOnInit()');
   }

   ngOnDestroy() {
     console.log('Se ejecuta metodo ngOnDestroy()');
   }

   ngDoCheck() {
     console.log('Se ejecuta metodo DoCheck()');
   }

   changeTitleH2() {
     this.titleh2 = 'Madden NFL 19';
   }
}


