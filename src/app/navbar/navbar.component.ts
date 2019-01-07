import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() desactivarNavBar: EventEmitter<boolean>;
  constructor(private _router: Router, private appComponent:AppComponent) {
    this.desactivarNavBar = new EventEmitter();
   }
  buscarHeroe(termino: string) {
    this._router.navigate(['/busquedaHeroes', termino]);
  }
  deseos(){
    this.appComponent.cabioNavBar(false);
    this._router.navigate(['/deseos/home']);
  }

  desactivar(desactivarNavBar: boolean){
    this.desactivarNavBar.emit(desactivarNavBar);
  }

}
