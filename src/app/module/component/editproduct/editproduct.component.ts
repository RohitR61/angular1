import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  editdata:FormGroup=new FormGroup({
    id:new FormControl(''),
    image:new FormControl(''),
    name:new FormControl(''),
    categories:new FormControl(''),
    brand:new FormControl(''),
    price:new FormControl(''),
    description:new FormControl(''),
  })
  constructor(private route:Router, private router:ActivatedRoute, private userservice:UserService) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id'])
    this.userservice.getuserbyid(this.router.snapshot.params['id']).subscribe((res:any)=>{
      // console.log(res)
      this.editdata=new FormGroup({
        id:new FormControl(res['id']),
        image:new FormControl(res['image']),
        categories:new FormControl(res['categories']),
        name:new FormControl(res['name']),
        brand:new FormControl(res['brand']),
        price:new FormControl(res['price']),
        description:new FormControl(res['description']),
      })
    })
  }
  updatedata(){
    // console.log(this.editdata.value)
    this.userservice.updateproduct(this.router.snapshot.params['id'],this.editdata.value).subscribe((res1)=>{
      console.log(res1);
    })
  }
}
