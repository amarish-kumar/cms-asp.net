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
var core_1 = require('@angular/core');
var gallery_service_1 = require('../services/gallery.service');
var GalleryComponent = (function () {
    function GalleryComponent(galleryService) {
        this.galleryService = galleryService;
        this.errorMessage = '';
        this.isLoading = true;
    }
    GalleryComponent.prototype.getHeroes = function () {
        var _this = this;
        this.galleryService
            .getValues()
            .subscribe(function (p) { return _this.heroes = p; }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
        var a = 1;
    };
    GalleryComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery',
            template: "<h1>Gallery {{heroes}}</h1>\n    <ul>\n        <li *ngFor=\"let hero of heroes\">           \n            {{hero.name}}        \n        </li>\n    </ul>\n<section>\n    <section *ngIf=\"isLoading && !errorMessage\">\n    Loading our hyperdrives!!! Retrieving data...\n    </section>\n      <ul>\n        <!-- this is the new syntax for ng-repeat -->\n        <li *ngFor=\"let person of people\">\n           \n          {{person.name}}\n        \n        </li>\n      </ul>\n      <section *ngIf=\"errorMessage\">\n        {{errorMessage}}\n      </section>\n  </section>\n\n",
            providers: [
                gallery_service_1.GalleryService
            ]
        }), 
        __metadata('design:paramtypes', [gallery_service_1.GalleryService])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map