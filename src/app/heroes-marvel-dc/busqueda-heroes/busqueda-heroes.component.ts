import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iheroes } from '../../interfaces/iheroes';

@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html'
})
export class BusquedaHeroesComponent implements OnInit {
  heroes: Iheroes[] = [];
  prural: string;
  termino: '';

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute, private _router: Router) {
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      !(this.heroes.length === 1) ? this.prural = 's' : this.prural = '';
    });
  }

  verHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }

}
