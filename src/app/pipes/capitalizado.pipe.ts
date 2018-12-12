import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    // transform(value: string, args: any[]): string {
        transform(value: string, todas: boolean = true): string {
        value = value.toLowerCase();
        // tslint:disable-next-line:prefer-const
        let nombres = value.split(' ');
        // el split separa la cadena de texto por el caracter que quieres buscar, en este caso es un espacio
        
        if(todas){
            for (let i in nombres) {
                //substr(1) es la primera posicion de la palabra en adelante, ej, Irvin con substr(1) = rvin
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        }else
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        
        return nombres.join(' ');
    }
}
