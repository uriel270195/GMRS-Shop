import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    position = 'before';
    user: string;
    hide = true;
    pass: string;
    constructor(public _router: Router, public _log: LoginService) { }

    ngOnInit() {
    }

    acceder() {
        (this.user == null || this.user == '') ?
            alert('Ingresa Usuario') :
            (this.pass == null || this.pass == '') ?
                alert('Ingresa Contraseña') :
                this._log.login(this.user,this.pass) ? this._router.navigate(['home']) : alert('Datos Incorrectos');
    }
}
