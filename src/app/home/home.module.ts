import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

//import { MatButtonModule, MatIconModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BodyIfForComponent } from '../body-if-for/body-if-for.component';
// import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    //MatButtonModule,
    //MatIconModule,
    MatTooltipModule
  ],
  declarations: [HomePage, BodyIfForComponent],//, NavbarComponent],
  exports:[ BodyIfForComponent]//, NavbarComponent]
})
export class HomePageModule {}
