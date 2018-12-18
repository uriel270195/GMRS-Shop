import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private statusNavBar = new Subject<boolean>();//observable
  constructor() { }

  setSatus(status: boolean){
    this.statusNavBar.next(status);
  }

  getStatus(){
    return this.statusNavBar.asObservable();
  }
}
