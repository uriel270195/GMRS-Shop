import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeseosComponent } from './deseos.component';
import { ROUTES } from '../deseos/deseos.routes';
import { RouterModule } from '@angular/router';
import { PendientesComponent } from '../pendientes/pendientes.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [DeseosComponent, PendientesComponent],
})
export class DeseosPageModule {}
