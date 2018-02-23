import { Injectable } from '@angular/core';
import { Router, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  CanActivate 
} from "@angular/router";
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if( this.auth.isAuthenticated() ){
      console.log("GUARDDDDD");      
      return true;
    }
    console.log("Blocked by guard");
    return false;
    
  }
}
