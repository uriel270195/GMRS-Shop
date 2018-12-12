import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  nombre = 'Irvin Uriel';
  nombre2 = 'irVIn uRiEl agUilAr cOsMe';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  Pi = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 500,
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorDePromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Llego la Promesa'), 3500 );
  });

  fecha = new Date();

  video = 'fKopy74weus';

  activar=true;
}
