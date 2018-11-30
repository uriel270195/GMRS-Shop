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

// servicios
import { HeroesService } from './service/heroes.service';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, AboutComponent, HomeHeroesComponent, NavbarComponent, FooterComponent, HeroeComponent],
  entryComponents: [],
  imports: [RouterModule, BrowserModule, IonicModule.forRoot(), MatSelectModule, AppRoutingModule, 
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  providers: [
    StatusBar,
    SplashScreen,
    HeroesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [NavbarComponent, FooterComponent]
})
export class AppModule {}
