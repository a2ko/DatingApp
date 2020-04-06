import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-membar-card',
  templateUrl: './membar-card.component.html',
  styleUrls: ['./membar-card.component.css']
})
export class MembarCardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
