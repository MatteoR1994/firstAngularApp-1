import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  public isDrawerOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isDrawerOpen = new BehaviorSubject<boolean>(false);
  }

  checkLocation(): boolean {
    const currentPathName = window.location.pathname;
    if (currentPathName === '/welcome') {
      return true;
    } else {
      return false;
    }
  }

}
