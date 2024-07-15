import { Component } from '@angular/core';
import { UtilsTsService } from './services/utils.ts.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/folder/', icon: '' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor( public utilsService: UtilsTsService ) {}
}
