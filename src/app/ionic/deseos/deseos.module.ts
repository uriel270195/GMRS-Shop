import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeseosComponent } from './deseos.component';
import { ROUTES } from '../deseos/deseos.routes';
import { RouterModule } from '@angular/router';
import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/pendientes.component';
import { AgregarComponent } from '../agregar/agregar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [DeseosComponent, PendientesComponent, TerminadosComponent, AgregarComponent],
  entryComponents: [DeseosComponent,PendientesComponent,TerminadosComponent,AgregarComponent]
})
export class DeseosPageModule {}
