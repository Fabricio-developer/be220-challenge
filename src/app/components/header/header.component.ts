import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { LogoComponent } from 'src/assets/logo/logo.component';
import { Preferences } from '@capacitor/preferences';
import { ProfileHeaderComponent } from "../profile-header/profile-header.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [LogoComponent, ProfileHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent implements OnInit {
  darkMode = false;

  constructor() {
    this.checkAppMode();

  }

  async checkAppMode() {
    Preferences.clear()
    const checkIsDarkMode = await Preferences.get({ key: 'darkModeActivated' });

    checkIsDarkMode?.value  == 'true' || checkIsDarkMode?.value == null
      ? (this.darkMode = true)
      : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
  }

  ionViewDidEnter() {


  }

}
