import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/Auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() titleValue: any;
  model: any = {};
  jwtHelper = new JwtHelperService();
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
this.authService.login(this.model).subscribe(next => {
  this.alertify.success('welcome');

}, error => {
 this.alertify.error(error);
});
  }

  loggedIn(){
  return this.authService.loggedIN();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('logged out')
  }

}
