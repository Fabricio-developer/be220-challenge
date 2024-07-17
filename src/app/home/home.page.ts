import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { accessibility, notifications, personCircle, trophy } from 'ionicons/icons';
import { ProfileHeaderComponent } from "../components/profile-header/profile-header.component";
import { CarouselComponentCard, CarouselProps } from '../components/carousel/interfaces';
import { CarouselComponent } from "../components/carousel/carousel.component";
import { LogoComponent } from "../../assets/logo/logo.component";
import { AuthService } from '../services/auth/auth.service';
import { NavController, ToastController } from '@ionic/angular';
import { ProgramsService } from '../services/programs/programs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ProfileHeaderComponent, CarouselComponent, LogoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  public appPages = [
    { title: 'Inbox', url: '/home/profile', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  private darkMode = false;
  public folder!: string;
  public cardsPersonal!: CarouselComponentCard[]
  public cardsPrograms!: CarouselComponentCard[]
  public personalOnline: CarouselProps = {
    title: 'Personal online',
    type: 'icon',
    icon: 'add-circle-outline'
  }
  public programs: CarouselProps = {
    title: 'Programas',
    type: 'badge',
    badgeText: 'new'
  }
  private activatedRoute = inject(ActivatedRoute);

  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService, private toastController: ToastController, public navController: NavController) {
    this.checkAppMode();

    addIcons({ personCircle, notifications, accessibility, trophy });

  }

  ngOnInit() {

    this.cardsPersonal = [
      {
        bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
        cardTitle: 'Novo treino',
        cardType: 'new'
      },
      {
        bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
        cardTitle: 'Levantamento de peso',
        cardSubtitle: 'Continuar treinando',
      },
    ]
    this.cardsPrograms = [
      {
        bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
        cardTitle: 'Levantamento de peso',
        cardSubtitle: 'Continuar treinando',
      },
      {
        bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
        cardTitle: 'Levantamento de peso',
      },
    ]
  }

  async checkAppMode() {
    Preferences.clear()
    const checkIsDarkMode = await Preferences.get({ key: 'darkModeActivated' });

    checkIsDarkMode?.value == 'true' || checkIsDarkMode?.value == null
      ? (this.darkMode = true)
      : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);
  }


  public paths = [
    {
      name: 'Profile', url: '/home/profile', icon: personCircle
    }
  ]

  profile() {
    this.router.navigate(['home/profile'], { relativeTo: this.route });

  }


  async logout() {
    await this.authService.signOut();
    const toast = await this.toastController.create({
      message: 'Usuário deslogado',
      duration: 1000,
      position: 'top',
    });

    this.navController.navigateBack('login')


    await toast.present();
  }

}
