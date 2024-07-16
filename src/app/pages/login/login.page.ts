import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵFormControlCtor } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { types } from './interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogoComponent } from "../../../assets/logo/logo.component";
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogoComponent, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(private router: Router, public auth: AuthService) {
    addIcons({ logoGoogle });
    this.initForm();
  }

  email: string = '';
  password: string = '';


  ngOnInit() {

  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  async login(option: types = 'email') {

    switch (option) {
      case 'google':
        console.log("🚀 ~ LoginPage ~ loginHandler ~ google:")
        // await this.auth.googleSignin()

        console.log("🚀 ~ LoginPage ~ loginHandler ~ this.router.url:", this.router.url)
        this.router.navigate(['/', 'home']);

        break;

      default:
        if(this.form.invalid) return;
        const credential = await this.auth.emailSignin(this.form.get('email')?.value, this.form.get('password')?.value)
        console.log("🚀 ~ LoginPage ~ login ~ credential:", credential)
        break;
    }
  }

}
