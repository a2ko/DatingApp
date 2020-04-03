import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/Auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() titleValue: any;
  model: any = {};
  jwtHelper = new JwtHelperService();
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('welcome');
      },
      error => {
        this.alertify.error(error);
      }, () => {
        this.router.navigate(['/membars']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIN();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/']);
  }
}
