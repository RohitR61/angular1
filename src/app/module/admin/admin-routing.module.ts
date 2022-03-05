import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { UploadImageComponent } from 'src/app/upload-image/upload-image.component';
import { AddproductComponent } from '../component/addproduct/addproduct.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { EditproductComponent } from '../component/editproduct/editproduct.component';
import { MenuComponent } from '../component/menu/menu.component';

const routes: Routes = [
  {
    path:"",children:[
      {
        path:"",component:DashboardComponent
      },
      {
        path:"addproduct", component:AddproductComponent
      },
      {
        path:"edit/:id", component:EditproductComponent
      },
      {
        path:"menu", component:MenuComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
