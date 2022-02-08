import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const RUTAS: Routes = [
    {path: 'home', component:HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);