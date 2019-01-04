import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  loading: boolean;
  artistas : any[]=[];
  constructor(private appComponent:AppComponent, private _spoty:SpotifyService) { 
    this.appComponent.cabioNavBar(false);//false es para que muestre el nav bar de spotyfy
  }

  buscar(termino: string){
    this.loading=true;
    if ( termino.length === 0 ) {
      this.artistas = [];
      this.loading = false;
      return;
      }
    this._spoty.getArtistas(termino).subscribe((data: any) =>{
      this.artistas= data; 
      this.loading=false;
    });
  }
}
