import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from '../component/addproduct/addproduct.component';
import { EditproductComponent } from '../component/editproduct/editproduct.component';
import { MenuComponent } from '../component/menu/menu.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AddproductComponent,
    EditproductComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
