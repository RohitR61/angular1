import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminheader:boolean=true;
  loggedin:boolean=true;
  logoutuser:boolean=false;
  constructor(private userservice:UserService, private route:Router) { }

  ngOnInit(): void {
    this.userservice.adminheader.subscribe(res=>{
      this.adminheader=res
      
    })
    this.userservice.loggedin.subscribe(res=>{
      this.loggedin=res
    })
    this.userservice.logoutuser.subscribe(res=>{
      this.logoutuser=res
    })
  }
  logout(){
    localStorage.clear();
    this.route.navigate(["/login"])
  }

}
