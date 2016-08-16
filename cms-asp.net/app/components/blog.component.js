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
var router_1 = require('@angular/router');
var logged_in_guard_1 = require('../logged-in.guard');
var BlogComponent = (function () {
    function BlogComponent(router) {
        this.router = router;
        this.authorize = false;
    }
    BlogComponent.prototype.ngDoCheck = function () {
        this.authorize = logged_in_guard_1.isLoggedin();
    };
    BlogComponent.prototype.gotoDetail = function (selectedHero) {
        this.router.navigate(['/blog-entry', selectedHero]);
    };
    BlogComponent.prototype.gotoManagement = function (selectEntry) {
        this.router.navigate(['/manage-entry', selectEntry]);
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'blog',
            templateUrl: 'app/components/blog.component.html',
            styleUrls: ['app/components/blog.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map