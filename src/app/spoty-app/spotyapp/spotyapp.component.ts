import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SpotifyService } from '../../service/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spotyapp',
  templateUrl: './spotyapp.component.html'
})
export class SpotyappComponent {
  nuevasCansiones: any[]=[];
  loading : boolean;
  error: boolean;
  mensajeError: string;
  token: string;
  constructor(private appComponent:AppComponent, private _spoty:SpotifyService, private router : Router) { 
    this.appComponent.cabioNavBar(false);//false es para que muestre el nav bar de spotyfy
    this.loading = true; // activa la animacion de busqueda
    this.error = false // error cuando caduca token de spoty
    this._spoty.getNewReleases().subscribe( (data:any) =>{
      this.nuevasCansiones=data;
      this.loading = false;//desactiva la animacion despues de obtener la data
    },
    (errorService =>{
      this.error=true;
      this.loading=false;
      this.mensajeError = errorService.error.error.message;
    }));
  }

  generarToken(){
    this._spoty.getToken().subscribe((token: any) =>{
      this.token = token.access_token;
      this._spoty.token=token.access_token;
      this.router.navigate(['/spotyApp/token']);
    });
  }
}
