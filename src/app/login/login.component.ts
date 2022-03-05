import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators,ReactiveFormsModule,FormsModule, FormControlName} from '@angular/forms' 
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any
  s:any[]=[];
  error:any
  loginform:FormGroup=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')

  })
  constructor(private userservice:UserService, private route:Router,private dataservice:DataserviceService) { }

  ngOnInit(): void {
   this.loginform=new FormGroup({
     email:new FormControl(''),
     password:new FormControl('')
   })
  }
  login(){
      this.dataservice.loginuser(this.loginform.value).subscribe((res:any)=>{
        if(this.loginform.value.email=="admin420@gmail.com" && this.loginform.value.password=="admin@123"){
          alert("admin Logged in")
          localStorage.setItem("email",this.loginform.value.email)
          
          
          this.route.navigateByUrl('/admin')
        }else{  
        alert(res.message)
        this.userservice.loggedin.next(false);
        this.userservice.logoutuser.next(true);
        this.userservice.loggedin.subscribe(res=>{ console.log(res) })
        this.userservice.logoutuser.subscribe(res=>{ console.log(res) })
        this.route.navigateByUrl('/')

      }


        // Sir not a valid user ka msg nahi print ho rha 
      // console.log(res.error);
    
      },(error)=>{
        this.error=error
        if(error=true){
          alert("Invalid User")
        }
      })
    // this.userservice.user1().subscribe((res:any)=>{
    //   const admin=res.find((a:any)=>{
    //     return "admin@gmail.com"===this.loginform.value.email && "admin@123"==this.loginform.value.password
    //   })
    //   if(admin){
    //     alert("Admin Logged In")
    //     this.loginform.reset();
    //     this.route.navigateByUrl('/admin')
    //     localStorage.setItem("admin","true")
    //   }
    //   else{
    //     const user=res.find((a:any)=>{
    //       return a.email=== this.loginform.value.email && a.password===this.loginform.value.password
    //     })
    //     if(user){
    //       alert("Login Succesfull")
    //       this.loginform.reset();
    //       this.route.navigateByUrl('/landing')
    //     }
    //     else{
    //       alert('User Not Found')
    //     }
    //   }
      
    // })
     
  }
}
