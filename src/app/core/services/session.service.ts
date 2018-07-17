import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  get logged(): boolean {
    return sessionStorage.getItem('logged') === 'true';
  }

  set logged(value: boolean) {
    sessionStorage.setItem('logged', '' + value);
  }

  // saveObject(obj: any) {
  //   sessionStorage.setItem('obj', JSON.stringify(obj));
  // }

  constructor() { }
}
