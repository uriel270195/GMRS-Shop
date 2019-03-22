import { Routes } from '@angular/router';
import { DeseosComponent } from './deseos.component';
import { AgregarComponent } from '../agregar/agregar.component';

export const ROUTES: Routes = [
  {path: 'home', component: DeseosComponent},
  {path: 'agregar', component: AgregarComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}// ** = cualquier otro path
];

