import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Person } from '../hero';

@Component({
    selector: 'gallery',
    template: `<h1>Gallery {{heroes}}</h1>
    <ul>
        <li *ngFor="let hero of heroes">           
            {{hero.name}}        
        </li>
    </ul>
<section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let person of people">
           
          {{person.name}}
        
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>

`,
    providers: [
        GalleryService
    ]
})
export class GalleryComponent implements OnInit {
    heroes: Hero[];
    error: any;
    people: Person[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;
    constructor(private galleryService: GalleryService) { }

    getHeroes() {
        this.galleryService
            .getValues()
            .subscribe(p => this.heroes = p);
        let a = 1;
    }
    getHeroes2() {
        this.galleryService
            .getHeroes().subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
    }
    ngOnInit() {
        this.getHeroes2();
        this.getHeroes();
    }
}

export interface Hero {
    id: number;
    name: string;
}