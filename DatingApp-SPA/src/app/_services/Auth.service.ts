import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
constructor(private http: HttpClient, private alertify: AlertifyService) { }

login(model: any){
  return this.http.post(this.baseURL + 'login' , model).pipe(
    map((Response: any) => {
      const user = Response;
      if (user){
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
            }
    })
  );
}
register(model: any){
return this.http.post(this.baseURL + 'register', model);
}

loggedIN(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);

}

}
