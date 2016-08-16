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
    { "title": "We are covered", "url": "/Images/img1.jpg" },
    { "title": "Generation Gap", "url": "/Images/img2.jpg" },
    { "title": "Potter Me", "url": "/Images/img3.jpg" },
    { "title": "Pre-School Kids", "url": "/Images/img4.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img5.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img6.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img7.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img8.jpg" }
];