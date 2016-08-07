import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
//import htmlTemplate from './app.component.html';
//import htmlStyle  from './app.component.css';


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css').toString()],
    directives: [HeroesComponent],
     providers: [
       HeroService
     ]
})
export class AppComponent {

    title: string = 'Tour of heroes';
    heroes: Hero[];
    selectedHero: Hero;
}
