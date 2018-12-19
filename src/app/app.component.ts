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

  cabioNavBar(desactivar: boolean) {
    this.activadoNavbar=true;
    console.log(this._router.url);
    if(this._router.url === '/spotyApp')
      this.activadoNavbar=desactivar;
  }
}
