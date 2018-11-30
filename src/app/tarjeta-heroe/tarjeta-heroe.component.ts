import { Component, OnInit, Input } from '@angular/core';
import { Iheroes } from '../interfaces/iheroes';
import { Router } from '@angular/router';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html'
})
export class TarjetaHeroeComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  heroes: Iheroes [] = [];
  constructor( private _router: Router, private _heroesService: HeroesService ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe() {
    this._router.navigate(['/heroe', this.index]);
  }

}
