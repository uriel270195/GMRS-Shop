import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { HomeHeroesComponent } from './home-heroes/home-heroes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// importaciones para las fechas en español
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

//aplica el formato español de las fechas
import { LOCALE_ID } from '@angular/core';

// servicios
import { HeroesService } from './service/heroes.service';
import { HeroeComponent } from './heroe/heroe.component';
import { BusquedaHeroesComponent } from './busqueda-heroes/busqueda-heroes.component';
import { TarjetaHeroeComponent } from './tarjeta-heroe/tarjeta-heroe.component';
import { PipeComponent } from './pipe/pipe.component';

//pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

registerLocaleData(localeEs);
@NgModule({
  declarations: [CapitalizadoPipe,
                 AppComponent,
                 HeroesComponent,
                 AboutComponent,
                 HomeHeroesComponent,
                 NavbarComponent,
                 FooterComponent,
                 HeroeComponent,
                 BusquedaHeroesComponent,
                 TarjetaHeroeComponent,
                 PipeComponent,
                 DomseguroPipe,
                 ContrasenaPipe],
  entryComponents: [],
  imports: [RouterModule, BrowserModule, IonicModule.forRoot(), MatSelectModule, AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  providers: [
    StatusBar,
    SplashScreen,
    HeroesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //applica el formato de las fechas en español
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent],
  exports: [NavbarComponent, FooterComponent]
})
export class AppModule {}
