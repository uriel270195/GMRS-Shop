import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { HomeHeroesComponent } from './home-heroes/home-heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BusquedaHeroesComponent } from './busqueda-heroes/busqueda-heroes.component';
import { PipeComponent } from './pipe/pipe.component';
import { SpotyappComponent } from './spotyapp/spotyapp.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'heroesHome', component: HomeHeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'busquedaHeroes/:nombre', component: BusquedaHeroesComponent },
  { path: 'pipes', component: PipeComponent },
  { path: 'spotyApp', component: SpotyappComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
