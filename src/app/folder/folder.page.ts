import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponentCard, CarouselProps } from '../components/carousel/interfaces';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
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
    badgeText:'new'
  }
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cardsPersonal = [
      {
        bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
        cardTitle: 'Novo treino',
        cardType: 'new'
      },
      { bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
         cardTitle: 'Levantamento de peso',
        cardSubtitle: 'Continuar treinando',},
    ]
    this.cardsPrograms = [
      { bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
         cardTitle: 'Levantamento de peso',
        cardSubtitle: 'Continuar treinando',},
        { bgImage: 'https://img.freepik.com/fotos-gratis/dumbbells-no-primeiro-plano-ambiente-de-ginasio-atras_91128-4625.jpg?t=st=1721001572~exp=1721005172~hmac=a8bef969a0c857b0ac8752c5cff14c8642e3fd2a6ee5473edf7218f94b5adbba&w=996',
          cardTitle: 'Levantamento de peso',},
    ]
  }
}
