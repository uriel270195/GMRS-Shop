import { Routes } from '@angular/router';
import { DeseosComponent } from './deseos.component';

export const ROUTES: Routes = [
  {path: 'home', component: DeseosComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}// ** = cualquier otro path
];

