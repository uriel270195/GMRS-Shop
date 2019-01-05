import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeseosComponent } from './deseos.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: DeseosComponent,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../../spoty-app/spotyapp/spotyapp.module#SpotyAppModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeseosPageRoutingModule {}

