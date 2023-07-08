;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JoyeriaComponent } from './components/joyeria/joyeria.component';
import { ElectronicsaComponent } from './components/electronicsa/electronicsa.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { DialogSuccessComponent } from './components/dialog-success/dialog-success.component';
import { ConfirmdialogComponent } from './components/confirmdialog/confirmdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './components/register/register.component';
import { VcorreoComponent } from './components/vcorreo/vcorreo.component';
import { RpasswordComponent } from './components/rpassword/rpassword.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductsComponent,
    JoyeriaComponent,
    ElectronicsaComponent,
    RopaComponent,
    InsertarComponent,
    FilterPipe,
    DialogErrorComponent,
    DialogSuccessComponent,
    ConfirmdialogComponent,
    AddproductComponent,
    RegisterComponent,
    VcorreoComponent,
    RpasswordComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NgbModule,
    MatSnackBarModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
