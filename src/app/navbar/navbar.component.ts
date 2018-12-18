import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() desactivarNavBar: EventEmitter<boolean>;
  constructor(private _router: Router) {
    this.desactivarNavBar = new EventEmitter();
   }

  ngOnInit() {
  }
  buscarHeroe(termino: string) {
    this._router.navigate(['/busquedaHeroes', termino]);
  }

  desactivar(desactivarNavBar: boolean){
    this.desactivarNavBar.emit(desactivarNavBar);
  }

}
