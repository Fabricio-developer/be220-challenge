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
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { types } from './interface';
import { ToastController } from '@ionic/angular';
import { LogoComponent } from 'src/assets/logo/logo.component';
import { User } from 'src/app/services/auth/interface';
import { Toast } from '@capacitor/toast';


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

  constructor(private router: Router, public auth: AuthService) {
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
      await Toast.show({
        text: 'Verfique o login e tente novamente',
        position: 'top',
        duration: 'short'
      });
      return;
    }).then(async (credential: User | any) => {
      if (credential && credential.error == true) {
        await Toast.show({
          text: 'Erro ao efetuar o login',
          position: 'top',
          duration: 'short'
        });

        return
      }

      await Toast.show({
        text: 'Logado com sucesso',
        position: 'top',
        duration: 'short'
      });

      localStorage.setItem('user', JSON.stringify(credential))
      this.router.navigate(['/', 'home']);
    })

  }

  async login(option: types = 'email') {

    switch (option) {
      case 'google':
        const google: boolean = await this.auth.googleSignin()
        if (!google) {
          await Toast.show({
            text: 'Hello!',
          });

          return;
        }
        this.router.navigate(['/', 'home']);

        break;

      default:
        break;
    }
  }
}
