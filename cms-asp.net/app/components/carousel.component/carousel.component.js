"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Component form the angular core package
var core_1 = require('@angular/core');
// Compoent Decorator
var CSSCarouselComponent = (function () {
    function CSSCarouselComponent() {
        //images data to be bound to the template
        this.images = IMAGES;
    }
    CSSCarouselComponent = __decorate([
        core_1.Component({
            //Name of our tag
            selector: 'css-carousel',
            //Template for the tag
            template: "\n <div class=\"carousel\">\n\n  <ul class=\"slides\">\n\n    <li *ngFor=\"let image of images\">\n      <h2>{{image.title}}</h2>\n      <img src=\"{{image.url}}\" alt=\"\">\n    </li>\n\n  </ul>\n\n</div>\n  ",
            styleUrls: ['app/components/carousel.component/carousel.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], CSSCarouselComponent);
    return CSSCarouselComponent;
}());
exports.CSSCarouselComponent = CSSCarouselComponent;
//IMAGES array implementing Image interface
var IMAGES = [
    { "title": "We are covered", "url": "/Images/img1.jpg" },
    { "title": "Generation Gap", "url": "/Images/img2.jpg" },
    { "title": "Potter Me", "url": "/Images/img3.jpg" },
    { "title": "Pre-School Kids", "url": "/Images/img4.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img5.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img6.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img7.jpg" },
    { "title": "Young Peter Cech", "url": "/Images/img8.jpg" }
];
//# sourceMappingURL=carousel.component.js.map