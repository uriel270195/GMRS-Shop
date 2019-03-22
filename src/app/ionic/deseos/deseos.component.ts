import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-deseos',
  templateUrl: './deseos.component.html',
})
export class DeseosComponent{
  page=false;
  constructor(private appComponent:AppComponent) {
    this.appComponent.cabioNavBar(false);
  }

  showHome(){
    this.page = false;
    console.log("joñ");
    
  }

}
