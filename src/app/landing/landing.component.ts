import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    // this.userservice.loggedin.next(true);
    // this.userservice.logoutuser.next(false);
  }

}
