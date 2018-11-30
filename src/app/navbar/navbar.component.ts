import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  buscarHeroe(termino: string) {
    this._router.navigate(['/busquedaHeroes', termino]);
  }

}
