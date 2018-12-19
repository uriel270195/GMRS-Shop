import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private appComponent:AppComponent) {
    this.appComponent.cabioNavBar(true);
   }
}
