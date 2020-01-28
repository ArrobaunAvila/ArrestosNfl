/*Importar Modulos del router angular */
import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

/*Importar Componentes*/
import { HomeComponent } from './home/home.component';
import { MenuActionsComponent } from './menu-actions/menu-actions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';


/*Array Configuracion de rutas*/
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menuheroes', component: MenuActionsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/:heroe', component: DashboardComponent},
  { path: 'dashboard/:heroe/:saga/:rango', component: DashboardComponent},
  { path: '**', component: HomeComponent}
];

/*Exportar el modulo del router*/
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


