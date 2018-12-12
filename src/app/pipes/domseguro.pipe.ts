import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){ }
// SafeResourceUrl puede ser any pero lo pongo para saber
  transform(value: string, url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
