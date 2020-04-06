import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/Auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MembarListComponent } from './membars/membar-list/membar-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { MembarCardComponent } from './membars/membar-card/membar-card.component';
import { MembarDetailComponent } from './membars/membar-detail/membar-detail.component';
import { MemberDetailResolver } from './_resolves/membar-detail.resolver';
import { MemberListResolver } from './_resolves/membar-list.resolver';

export function tokenGetter(){
   return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
   overrides = {
      pinch: {enable: false},
      rotate: {enable: false}
   };
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MembarListComponent,
      ListsComponent,
      MessagesComponent,
      MembarCardComponent,
      MembarDetailComponent
     ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains:['localhost:5000'],
            blacklistedRoutes:['localhost:5000/api/auth']
         }
      }),
      NgxGalleryModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      MemberDetailResolver,
      MemberListResolver,
      {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
