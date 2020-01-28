import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing , appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { MenuActionsComponent } from './menu-actions/menu-actions.component';
import { FooterComponent} from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuActionsComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
