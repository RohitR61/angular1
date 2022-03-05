import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../user.service';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html', 
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit,OnDestroy {

  constructor(private route:Router, private router:ActivatedRoute, private userservice:UserService) { }
  adddata:FormGroup=new FormGroup({
    id:new FormControl(''),
    image:new FormControl(''),
    name:new FormControl(''),
    categories:new FormControl(''),
    brand:new FormControl(''),
    price:new FormControl(''),
    description:new FormControl(''),
  })
  ngOnInit(): void {
    this.userservice.adminheader.next(false)
  }
  ngOnDestroy(): void {
    this.userservice.adminheader.next(true)
  }

  submit(){
    this.userservice.getproductbyid(this.adddata.value).subscribe(res=>{ 
        console.log(res) })
    
  }
  }
