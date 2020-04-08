import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembarListComponent } from './membars/membar-list/membar-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MembarDetailComponent } from './membars/membar-detail/membar-detail.component';
import { MemberDetailResolver } from './_resolves/membar-detail.resolver';
import { MemberListResolver } from './_resolves/membar-list.resolver';
import { MembarEditComponent } from './membars/membar-edit/membar-edit.component';
import { MemberEditResolver } from './_resolves/membar-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'membars',
        component: MembarListComponent,
        resolve: {user: MemberListResolver}
      },
      {
        path: 'membars/:id',
        component: MembarDetailComponent,
        resolve: {user: MemberDetailResolver}
      }, 
      { path: 'membar/edit', component: MembarEditComponent,
       resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges] },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent }
    ]
  },
  { path: '*', redirectTo: '/', pathMatch: 'full' },
];
