import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  constructor(private authGuardService: AuthGuardService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authGuardService.canActivate();
  }

  mobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  signOut(): void {
    this.authGuardService.signOut();
    window.location.reload();
  }
}
