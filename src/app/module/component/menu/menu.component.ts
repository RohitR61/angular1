import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
import{UserService} from '../../../user.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  value:any
  data:any
  product1:{id:any, image:any,name:any,brand:any,price:any,description:any,category:any}[]=[];
  
  constructor( private dataservice:DataserviceService, private user:UserService) {

  }
  ngOnInit(): void {
    this.dataservice.getAllUsers().subscribe((res:any)=>{
      console.log(res.message) 
      this.data=res.message
      this.user.adminheader.next(false)
      
    })
   
    
  //   this.user.user().subscribe(data=>{
  //     this.value=data
  //     console.log(this.value)
     
  //     this.user.adminheader.next(false)
  //   })
  // }
  // ngOnDestroy(): void {
  //   this.user.adminheader.next(true)
  // }
  // delete(id:any){
  //   console.log(id)
  //   this.user.deletedata(id).subscribe((res)=>{
  //     this.ngOnInit()
  //   })
  // }  
  }
  deleteuser(id:any){
    // console.log(id)
    this.dataservice.deleteuser(id).subscribe((res)=>{
      console.log(res)
    })
  }
}

