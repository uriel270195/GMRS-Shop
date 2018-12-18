import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-spotyapp',
  templateUrl: './spotyapp.component.html',
  styles: []
})
export class SpotyappComponent implements OnInit {
  constructor(private appComponent:AppComponent) { 
    this.appComponent.cabioNavBar(false);//false es para que muestre el nav bar de spotyfy
  }

  ngOnInit() {
  }
  
}
