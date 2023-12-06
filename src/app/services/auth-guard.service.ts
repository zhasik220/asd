import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.isUserLoggedIn())
      return true;

    // this.router.navigate(['login']);
    return false;
  }

  signOut() {
    sessionStorage.removeItem("username");
    this.router.navigate(['login']);
  }
}
