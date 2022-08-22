import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor() { }

  fetch(val:string){
    alert(val);
    return val;
  }
}
