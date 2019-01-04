import { Routes } from "@angular/router";
import { SpotyappComponent } from './spotyapp/spotyapp.component';
import { SearchComponent } from './search/search.component';
import { ArtistaComponent } from './artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export const ROUTES: Routes = [
    {path: 'home', component: SpotyappComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistaComponent},
    {path: 'token', component: NavbarComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}// ** = cualquier otro path
];