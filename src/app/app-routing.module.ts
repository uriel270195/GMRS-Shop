import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes-marvel-dc/heroes/heroes.component';
import { AboutComponent } from './heroes-marvel-dc/about/about.component';
import { HomeHeroesComponent } from './heroes-marvel-dc/home-heroes/home-heroes.component';
import { HeroeComponent } from './heroes-marvel-dc/heroe/heroe.component';
import { BusquedaHeroesComponent } from './heroes-marvel-dc/busqueda-heroes/busqueda-heroes.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './If-For/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'heroesHome', component: HomeHeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'busquedaHeroes/:nombre', component: BusquedaHeroesComponent },
  { path: 'pipes', component: PipeComponent },
  { path: 'spotyApp', loadChildren: './spoty-app/spotyapp/spotyapp.module#SpotyAppModule' },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
