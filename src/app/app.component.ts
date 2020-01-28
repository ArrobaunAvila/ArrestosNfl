import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  public title = 'Welcome To ArrestosNfl';
  public verifyComponet: boolean;
  constructor() {
  console.log('Se ejecuta constructor AppComponent');
  }

  ngOnDestroy() {
   console.log('Se ha ejecutado ngOnDestroy()');
  }

  ocultarInfo(verify: boolean) {
   if (verify) {
    this.verifyComponet = true;
   } else {
    this.verifyComponet = true;
   }
  }

}


