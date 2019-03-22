import { Injectable } from '@angular/core';
import { Lista } from '../ionic/models';
@Injectable()
export class DeseosService{
    listas: Lista[]=[];
    constructor(){
        console.log('deseos service inicializado');
        const lista1 = new Lista('Terminar EE');
        const lista2 = new Lista('Boss a vencer');

        this.listas.push(lista1, lista2);

        console.log(this.listas);
        
    }
}