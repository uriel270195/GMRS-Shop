import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  constructor(public modalController: ModalController, private appComponent:AppComponent) {
    this.appComponent.cabioNavBar(true);
  }
  

}
