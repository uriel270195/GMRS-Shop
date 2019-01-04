import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private activatedRoute: ActivatedRoute, private _spoty:SpotifyService) {
    this.activatedRoute.params.subscribe( params =>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    } );
   }

   getArtista(id: string){
     this.loading=true;
     this._spoty.getArtista(id).subscribe(artista => {
       console.log(artista);
       this.artista = artista;
       this.loading=false;
     });
   }
   getTopTracks(id: string){
     this.loading=true;
     this._spoty.getTopTracks(id).subscribe(topTracks => {
       console.log(topTracks);
       this.topTracks=topTracks;
     });
   }

}
