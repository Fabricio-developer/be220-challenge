
export interface CarouselComponentCard {
  bgImage: string;
  cardTitle: string;
  cardSubtitle?: string;
  textPosition?: 'center' | 'bottom';
  cardType?: 'new' | 'default';
}

export interface CarouselProps {
  title: string;
  type: 'icon' | 'badge';
  badgeText?: string;
  icon?: string;
  function?: Function;
}
