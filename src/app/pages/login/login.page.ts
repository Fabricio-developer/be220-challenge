import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [IonCol, IonRow, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public auth: AuthService) {
    addIcons({ logoGoogle });
  }

  email: string = '';
  password: string = '';


  ngOnInit() {
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
        break;
    }
  }

}
