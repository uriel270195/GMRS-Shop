import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home-heroes',
  templateUrl: './home-heroes.component.html'
})
export class HomeHeroesComponent implements OnInit {

  constructor(private appComponent:AppComponent) { 
    this.appComponent.cabioNavBar(true);
  }

  ngOnInit() {
  }

}
