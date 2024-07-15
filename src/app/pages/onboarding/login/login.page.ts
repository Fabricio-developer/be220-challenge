import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { types } from './interface';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public auth: AuthService, private router: Router, private navController: NavController) { }

  ngOnInit() {
  }

  async loginHandler(option: types) {
    switch (option) {
      case 'google':
        console.log("🚀 ~ LoginPage ~ loginHandler ~ google:")
        await this.auth.googleSignin()

        const currentUrl = this.router.url;

        console.log("🚀 ~ LoginPage ~ loginHandler ~ this.router.url:", this.router.url)
        // this.router.navigateByUrl('/profile');
        await this.router.navigate(['/profile']);

        // this.navController.navigateRoot('profile');

        break;

      default:
        break;
    }
  }

}
