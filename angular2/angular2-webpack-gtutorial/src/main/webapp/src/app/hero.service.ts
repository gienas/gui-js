import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    public   getHeroes() {
        return Promise.resolve(HEROES);
    }

}
