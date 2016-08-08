// Import Component form the angular core package
import { Component } from '@angular/core';

// Import the Image interface
import {Image} from './image.interface';

// Compoent Decorator
@Component({
    //Name of our tag
    selector: 'css-carousel',
    //Template for the tag
    template: `
 <div class="carousel">

  <ul class="slides">

    <li *ngFor="let image of images">
      <h2>{{image.title}}</h2>
      <img src="{{image.url}}" alt="">
    </li>

  </ul>

</div>
  `,
    styleUrls: ['app/components/carousel.component/carousel.component.css'],
})
//Carousel Component itself
export class CSSCarouselComponent {
    //images data to be bound to the template
    public images: Image[] = IMAGES;
}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
    { "title": "We are covered", "url": "http://lorempixel.com/800/600" },
    { "title": "Generation Gap", "url": "http://lorempixel.com/801/600" },
    { "title": "Potter Me", "url": "http://lorempixel.com/802/600" },
    { "title": "Pre-School Kids", "url": "http://lorempixel.com/803/600" },
    { "title": "Young Peter Cech", "url": "http://lorempixel.com/804/600" }
];