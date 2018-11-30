import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  logo = false;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe( params => {
      // el id es el nombre que se declaro en el router ts
      this.heroe = _heroesService.getHeroe(params['id']); // es igual que decir params.id
    });
   }

  ngOnInit() {
  }

}
