import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mynewproject'; 

  arr=[2,3,4,4,5,6,7,8];

  // if(arr==2){

  // }
  res=this.arr[4]*2;
}
