import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-if-for',
  templateUrl: './body-if-for.component.html',
  styleUrls: ['./body-if-for.component.scss']
})
export class BodyIfForComponent implements OnInit {
  mostrar= true;
  frase: any = {
    mensaje: "Este es mi mensaje de prueba",
    autor: "Irvin Uriel"
  };

  personajes: string[]=['Nikolai','Takeo','Edward','Dempsey'];
  constructor() { }

  ngOnInit() {
  }

}
