
export interface CarouselComponentCard {
  bgImage: string;
  cardTitle: string;
  cardSubtitle?: string;
  textPosition?: 'center' | 'bottom';
  cardType?: 'new' | 'default';
}

export interface CarouselProps {
  title: string;
  badgeType: 'icon' | 'text';
  badge?: string;
  function?: Function;
}
