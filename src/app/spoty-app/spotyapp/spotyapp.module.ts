import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpotyappComponent } from './spotyapp.component';
import { ROUTES } from '../apoty-app.routes';
import { SearchComponent } from '../search/search.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { ArtistTargetComponent } from '../shared/artist-target/artist-target.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { ArtistaComponent } from '../artista/artista.component';
import { AppModule } from '../../app.module';
import { DomseguroPipe } from '../../pipes/domseguro.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ROUTES)
  ],
  
  declarations: [DomseguroPipe ,SpotyappComponent, NavbarComponent, NoimagePipe, ArtistTargetComponent, LoadingComponent,
  SearchComponent, ArtistaComponent],
  exports:[DomseguroPipe]
  
})
export class SpotyAppModule {}
