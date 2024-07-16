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
  IonIcon, IonLabel, IonRow, IonCol, IonGrid, IonTitle, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { LogoComponent } from "../../../../android/app/build/intermediates/assets/debug/public/assets/logo/logo.component";
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';

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
    IonGrid,IonInputPasswordToggle, LogoComponent],
})
export class loginPage {
  form!: FormGroup;
  isPwd = false;

  constructor() {
    this.initForm();
    addIcons({logoGoogle})
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

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
