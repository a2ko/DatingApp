import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membar-list',
  templateUrl: './membar-list.component.html',
  styleUrls: ['./membar-list.component.css']
})
export class MembarListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
 this.route.data.subscribe(data => {
   this.users = data['user'];

 })
  }

  // loadUsers(){
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //   }, error => {
  //     this.alertify.error(error);
  //   }
  //   );
  // }

}
