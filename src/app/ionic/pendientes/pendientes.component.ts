import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DeseosService } from '../../service/deseos.service';
import { Lista } from '../models/lista.model';
import { AgregarComponent } from '../agregar/agregar.component';
import { Router } from '@angular/router';
import { NavController,  } from '@ionic/angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit, OnChanges {
  
  page: boolean = false;
  constructor(public _deseosService: DeseosService, private _router: Router, private navctrl: NavController) { 
    this._deseosService.getPage().subscribe(page => this.page = page);
    }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.page);
  }

  listaSeleccionada(lista: Lista){
    console.log(lista);
    
  }
  // agregarLista(){
  //   // this.navctrl.navigateRoot('/deseos/agregar');
  //   this.page=true;
  //   // this._router.navigate(['/deseos/agregar']);
  // }

}
