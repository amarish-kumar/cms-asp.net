import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';


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
   
    errorMessage: string = '';
    isLoading: boolean = true;
    constructor(private galleryService: GalleryService) { }

    getHeroes() {
        this.galleryService
            .getValues()
            .subscribe(
            p => this.heroes = p,
            e => this.errorMessage = e,
            () => this.isLoading = false);
        let a = 1;
    }
    
    ngOnInit() {        
        this.getHeroes();
    }
}

export interface Hero {
    id: number;
    name: string;
}