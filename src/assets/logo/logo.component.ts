import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.svg',
  styleUrls: ['./logo.component.scss'],
  standalone: true
})
export class LogoComponent  implements OnInit {
  @Input() fillColor: string = "#F5A132";
  @Input() proportion: string = "100";

  constructor() { }

  ngOnInit() {}

}
