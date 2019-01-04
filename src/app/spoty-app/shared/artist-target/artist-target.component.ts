import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-target',
  templateUrl: './artist-target.component.html',
  styleUrls: ['./artist-target.component.scss']
})
export class ArtistTargetComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) { }
  verArtista(item : any){
    let artistaId
    artistaId = (item.type === 'artist')? item.id: item.artists[0].id;
    this.router.navigate(['spotyApp/artist', artistaId]);
  }
}
