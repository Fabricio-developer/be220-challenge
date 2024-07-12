import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { LogoComponent } from 'src/assets/logo/logo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [LogoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
