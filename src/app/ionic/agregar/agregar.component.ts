import { DeseosService } from '../../service/deseos.service';
import { Lista } from '../models/lista.model';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(public _deseosService: DeseosService, private appComponent:AppComponent) { 
    this.appComponent.cabioNavBar(false);
   }

}
