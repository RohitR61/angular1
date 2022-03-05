import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formvalue:any

  signupform: FormGroup =new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lastName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    status:new FormControl('',Validators.required)
  })
  index: any;
  id: any;
  constructor(private dataservice:DataserviceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.index=this.route.snapshot.params['i'];
    console.log("index ",this.index)
    console.log("id", this.id)

    this.dataservice.getAllUsers().subscribe(res=> {
      console.log(res.message)
      if(this.id==res.message[this.index]._id){
        // console.log(res)
        console.log("success")
        this.signupform=new FormGroup({
          firstName:new FormControl(res.message[this.index]['firstName']),
          lastName:new FormControl(res.message[this.index]['lastName']),
          email:new FormControl(res.message[this.index]['email']),
          status:new FormControl(res.message[this.index]['status']),
        })
      }
      
    })
    
  }
  update(){
      this.dataservice.update(this.route.snapshot.params['id'],this.signupform.value).subscribe(res=>{
        console.log(res)
      })
  }
}

