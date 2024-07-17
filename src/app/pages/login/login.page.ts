import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonItem,
  IonInput,
  IonText,
  IonButton,
  IonIcon, IonLabel, IonRow, IonCol, IonGrid, IonTitle, IonInputPasswordToggle
} from '@ionic/angular/standalone';
import { LogoComponent } from "../../../../android/app/build/intermediates/assets/debug/public/assets/logo/logo.component";
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { types } from './interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonTitle, IonLabel,
    IonIcon,
    IonButton,
    IonText,
    IonInput,
    IonItem,
    IonCard,
    IonContent,
    ReactiveFormsModule,
    IonRow,
    IonCol,
    IonGrid, IonInputPasswordToggle, LogoComponent],
})
export class loginPage {
  form!: FormGroup;
  isPwd = false;

  constructor(private router: Router, public auth: AuthService, private toastController: ToastController) {
    this.initForm();
    addIcons({ logoGoogle })
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

  togglePwd() {
    this.isPwd = !this.isPwd;
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    await this.auth.emailSignin(this.form.get('email')?.value, this.form.get('password')?.value).catch(async (error) => {
      console.log("🚀 ~ loginPage ~ onSubmit ~ error:", error)
      const toast = await this.toastController.create({
        message: 'Verfique o login e tente novamente',
        duration: 1000,
        position: 'top',
      });
      await toast.present();
    }).then(async (credential) => {

      const toast = await this.toastController.create({
        message: 'Logado com sucesso!',
        duration: 1000,
        position: 'top',
      });

      localStorage.setItem('user', JSON.stringify(credential))
      await toast.present();
      this.router.navigate(['/', 'home']);
    })

  }

  async login(option: types = 'email') {

    switch (option) {
      case 'google':
        await this.auth.googleSignin()

        this.router.navigate(['/', 'home']);

        break;

      default:
        break;
    }
  }
}
