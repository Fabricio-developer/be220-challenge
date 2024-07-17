import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/services/auth/interface';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileHeaderComponent implements OnInit {
  userData: User| null = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe((user) => {
      if (user)
        this.userData = user;

    })
  }

}
