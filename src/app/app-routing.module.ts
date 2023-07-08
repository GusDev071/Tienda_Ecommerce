import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { JoyeriaComponent } from './components/joyeria/joyeria.component';
import { ElectronicsaComponent } from './components/electronicsa/electronicsa.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';




const routes: Routes = [
  {path: '', redirectTo: 'Products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent}, 
  {path: 'joyeria', component: JoyeriaComponent},
  {path: 'electronica', component: ElectronicsaComponent},
  {path: 'ropa', component: RopaComponent},
  {path: 'insertar', component: InsertarComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
