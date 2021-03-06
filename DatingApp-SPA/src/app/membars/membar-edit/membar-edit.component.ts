import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/Models/User';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/Auth.service';

@Component({
  selector: 'app-membar-edit',
  templateUrl: './membar-edit.component.html',
  styleUrls: ['./membar-edit.component.css']
})
export class MembarEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  
  // before close a window
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any){
    if (this.editForm.dirty){
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
              private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  updateUser(){
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
    .subscribe(next => {
      this.alertify.success('Profile updated Successfuly');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });



      }

}
