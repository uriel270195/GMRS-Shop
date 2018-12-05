import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() heroeSeleccionado: EventEmitter<number>;
  heroes: Iheroes [] = [];
  constructor( private _router: Router, private _heroesService: HeroesService ) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe() {
    // esta es con la funcion output para mandar datos al componente padre
    // this.heroeSeleccionado.emit(this.index);


    // se comenta porque hay una misma funcion en el componente padre (heroes.component.ts)
    this._router.navigate(['/heroe', this.index]);
  }

}
