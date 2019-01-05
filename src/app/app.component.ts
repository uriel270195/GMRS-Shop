import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { enableProdMode } from "@angular/core";
import { Router } from "@angular/router";
enableProdMode();
@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  activadoNavbar;
  statusNabVar: boolean;
  quitarNavBar: boolean;
  constructor(
    private _router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.cabioNavBar(false);
    }, 0); 
  }

  cabioNavBar(desactivar: boolean) {//true activa nav bar principal y false activa navbar sopty app
    this.activadoNavbar=true;
    this.quitarNavBar=true;
    //-------------------------0,9 es para verificar que la ruta sea spotyapp para activar el navbar
    if(this._router.url.substr(0,9) === '/spotyApp')
      this.activadoNavbar=desactivar;
    if(this._router.url.substr(0,9) === '/deseos')
      this.quitarNavBar=false;
  }
}
