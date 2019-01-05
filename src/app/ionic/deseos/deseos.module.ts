import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeseosComponent } from './deseos.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DeseosPageModule,
  ],
  declarations: [DeseosComponent]
})
export class DeseosPageModule {}
