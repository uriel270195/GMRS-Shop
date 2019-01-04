import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

token = "";
// se debe importar en el modulo el HttpClientModule para usar el HttpClient
  constructor(private http:HttpClient) { 
    console.log("Servicio de spotify listo para usarse");
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.token }`
    });
    return this.http.get(url, {headers});
  }  

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(
        map( data => data['albums'].items)
      );
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe(
      map( data =>{
        return data['artists'].items
      })
    );
  }
  getArtista(id: string){
    return this.getQuery(`artists/${ id }`);
    // .pipe(map( data =>data['artists'].items));
  }
  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(map( data =>data['tracks']));
  }

  getToken(){
    const client_id = "b19d8047b69c486b8978f0b3f10ebe15";
    const client_secret = "5008c1494fbb434fac7cff79d7d679a3";
    const url = `http://spotify-get-token.herokuapp.com/spotify/${ client_id }/${ client_secret }`;
    return this.http.get(url);
  }
}
