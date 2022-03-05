import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  adminheader=new Subject<boolean>();
  loggedin=new Subject<boolean>();
  logoutuser=new Subject<boolean>();
  url="http://localhost:3000/menu";
  url1="http://localhost:3000/users"
  constructor(private http: HttpClient) { }
  user(){
    return this.http.get(this.url);
  }
  user1(){
    return this.http.get(this.url1)
  }
  getusersdata(data:any){
    return this.http.post(this.url1,data)
  }
  getproductbyid(data:any){
    console.log(data)
    return this.http.post(this.url,data)
    
  }
  deletedata(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getuserbyid(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateproduct(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }

}
