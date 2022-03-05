import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  token:any
  root=environment.apiUrl
  constructor(private http:HttpClient) { }
  getHeaders() {
    let header;
    if (this.token != "") {
      header = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "x-access-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIxZDllMTcxMDM1NTFjZDU0ZTg4ZjEiLCJpYXQiOjE2NDQ0NzY4MDJ9.GaCR0pg0tIHpASVDRJ_4DayaMlxa3n0kd4O7RMye_78'

          ,
        }),

      };

    } else {
      console.log("token not found");
    }
    return header;
  }
  getAllUsers():Observable<any>{
    return this.http.get(`${this.root}users/getAllUsers`, this.getHeaders())
    //  subject.asObservable();
  }
  addNewUser(data:any){
    return this.http.post(`${this.root}users/register`,data)
  }
  loginuser(data:any){
    return this.http.post(`${this.root}users/login`,data).pipe(catchError(this.handleError))
  }
  handleError(error:any){
    return throwError(error.message || "Server Error")
  }
  deleteuser(id:any){
    return this.http.delete(`${this.root}users/delete/${id}`, this.getHeaders())
  }
  update(id:any,data:any){
    return this.http.put(`${this.root}users/update/${id}`,data,this.getHeaders())
  }

}
