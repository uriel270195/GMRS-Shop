import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../service/deseos.service';
import { Lista } from '../models/lista.model';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {

  constructor(public _deseosService:DeseosService) { }

  ngOnInit() {
  }
  listaSeleccionada(lista:Lista){
    console.log(lista);
    
  }

}
