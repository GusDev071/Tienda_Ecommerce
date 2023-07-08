import {Component,  OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
    ){
      this.loginUsuario = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      })
    }

    ngOnInit(): void {

    }

    login() {
      const email = this.loginUsuario.value.email;
      const password = this.loginUsuario.value.password;
  
      
      this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
        if(user.user?.emailVerified) {
          this.router.navigate(['/muro']);
        } else {
          this.router.navigate(['/vcorreo']);
        }
      }).catch((error) => {
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
    }


}
