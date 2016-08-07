import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
//import htmlTemplate from './app.component.html';
//import htmlStyle  from './app.component.css';


@Component({
    selector: 'my-heroes',
    template: require('./heroes.component.html'),
    styles: [require('./heroes.component.css').toString()],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    title: string = 'Tour of heroes';
    heroes: Hero[];
    selectedHero: Hero;


    constructor(private heroService: HeroService) {

    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    ngOnInit() {
      this.getHeroes();
    }

    getHeroes() {
        //this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
