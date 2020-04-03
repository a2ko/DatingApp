import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembarListComponent } from './membar-list/membar-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'membars',
        component: MembarListComponent
      },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
