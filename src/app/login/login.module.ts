import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { MatIconModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatIconModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
