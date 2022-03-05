import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageUrl="assets/burger.jpg"
  filetoUpload:any=null;
  constructor() { }

  ngOnInit(): void {
  
  }
  handleFileInput(e:any){
if(e.target.files){    // Show image Preview
    var reader= new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload=(event:any)=>{

    this.imageUrl=event.target.result
    }
    
  }
  }
}
