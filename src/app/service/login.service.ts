import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(name: string, pass: string){
    return (name=='uriel' && pass =='123')?true:false;
}
}
