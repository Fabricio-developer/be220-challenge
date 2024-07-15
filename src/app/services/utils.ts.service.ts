import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class UtilsTsService {
  private darkMode = false;

  constructor() { }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    if (this.darkMode) {
      Preferences.set({ key: 'darkModeActivated', value: 'true' });
    } else {
      // localStorage.setItem('darkModeActivated', 'false');
      Preferences.set({ key: 'darkModeActivated', value: 'false' });
    }
  }
}
