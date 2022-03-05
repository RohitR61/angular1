import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, MinLengthValidator } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup =new FormGroup({})
  constructor(private dataservice:DataserviceService, private router:Router) { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      firstName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      lastName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password:new FormControl('',Validators.required)
        })
  }
  get f(){
    return this.signupform.controls;
  }
  // getErrorMessage()
  //   {
  //     if (this.f['emails'].hasError('required') ) {
  //       return 'You must enter a value';
  //     }
  //     else
  //     {
  //       return this.f['emails'].hasError('email') ? 'Not a valid email' : '';
  //     }
  //   }
    // // submitdata(){
    // //   this.userservice.getusersdata(this.signupform.value).subscribe(res=>{
    // //     console.log(res)
    // //   })
    // }
    submitdata(){
      console.log(this.signupform.value)
      this.dataservice.addNewUser(this.signupform.value).subscribe((res:any)=>{
        console.log(res);
        this.router.navigateByUrl("/admin/menu");
      })
      
    }
  }


