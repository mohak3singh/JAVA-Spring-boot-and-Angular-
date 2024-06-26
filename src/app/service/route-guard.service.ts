import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from './hardcoded-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public hardcodedAuthenticationServiceService:HardcodedAuthenticationServiceService,
    private router:Router
  ) {}
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthenticationServiceService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }
}
