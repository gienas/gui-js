import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: require('./hero-detail.component.html'),
  styles: [require('./hero-detail.component.css').toString()]
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
};
