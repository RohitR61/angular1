import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MealsComponent } from './meals/meals.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
const routes: Routes = [
  {
    path:"", component:LandingComponent
  },
  {
    path:"admin",loadChildren:()=>import("./module/admin/admin.module").then((m)=>m.AdminModule)
  },
  {
    path:"header", component:HeaderComponent
  },
  {
    path:"footer", component:FooterComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"burger", component:BurgerComponent
  },
  {
    path:"pizza", component:PizzaComponent
  },
  {
    path:"meals", component:MealsComponent
  },
  {
    path:"coffee", component:CoffeeComponent
  },
  {
    path:"signup", component:SignupComponent
  },
  {
    path:"update/:id/:i", component:UpdateComponent
  },
  {
    path:"uploadimage", component:UploadImageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
