import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { CarouselComponentCard, CarouselProps } from './interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit {
  @Input() cards: Array<CarouselComponentCard> = [];
  @Input() carousel!: CarouselProps

  constructor() { }

  ngOnInit() { }

}
