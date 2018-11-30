import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Iheroes } from '../interfaces/iheroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

    heroes: Iheroes[] = [];
  constructor(private _heroesService: HeroesService,
              private _router: Router
    ) { }

  ngOnInit() {
  this.heroes = this._heroesService.getHeroes();
  // console.log(this.heroes);
  }
  verHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }
}
