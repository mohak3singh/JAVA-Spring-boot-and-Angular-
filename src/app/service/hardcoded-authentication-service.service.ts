import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  constructor() { }

  authenticate(username : String, password : String){
    if(username === "mohak" && password === "1234"){
      return true;
    }
    return false;
  }
}
