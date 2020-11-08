import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import {ShopingCartComponent} from 'src/app/components/shoping-cart/shoping-cart.component';
import {PageNotFoundComponent} from 'src/app/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'',redirectTo:'/shop',pathMatch:'full'},
  { path:'login',component :LoginComponent},
  { path:'register',component:RegisterComponent },
  { path:'shop',component:ShopingCartComponent },
  { path:'**',component:PageNotFoundComponent}
  
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
