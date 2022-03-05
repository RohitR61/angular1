import { Component, OnDestroy, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators,ReactiveFormsModule,FormsModule, } from '@angular/forms' 
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  adminlogin: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
 constructor(private userservice:UserService ) { }

  ngOnInit(): void {
    this.userservice.adminheader.next(false)
  }
  ngOnDestroy(): void {
    this.userservice.adminheader.next(true)
  }

  }

