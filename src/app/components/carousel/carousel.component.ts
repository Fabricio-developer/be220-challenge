import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CarouselComponentCard, CarouselProps } from './interfaces';
import { addCircle, addCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent implements OnInit {
  @Input() cards: Array<CarouselComponentCard> = [];
  @Input() carousel!: CarouselProps

  constructor() {
    addIcons({ addCircle, addCircleOutline });

   }

  ngOnInit() { }

}
