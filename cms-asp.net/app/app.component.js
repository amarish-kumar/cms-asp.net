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
var dashboard_component_1 = require('./components/dashboard.component');
var blog_component_1 = require('./components/blog.component');
var gallery_component_1 = require('./components/gallery.component');
var about_component_1 = require('./components/about.component');
var login_component_1 = require('./components/login.component');
var register_component_1 = require('./components/register.component');
var manage_entry_component_1 = require('./components/manage-entry.component');
var blog_entry_component_1 = require('./components/blog-entry.component');
var logged_in_guard_1 = require('./logged-in.guard');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'App';
        this.authorize = false;
    }
    AppComponent.prototype.ngDoCheck = function () {
        this.authorize = logged_in_guard_1.isLoggedin();
    };
    AppComponent.prototype.gotoLogin = function () {
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.gotoRegister = function () {
        this.router.navigate(['/register']);
    };
    AppComponent.prototype.logOut = function () {
        console.log(localStorage['auth_token']);
        localStorage.removeItem("auth_token");
        this.authorize = logged_in_guard_1.isLoggedin();
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [dashboard_component_1.DashboardComponent, blog_component_1.BlogComponent, gallery_component_1.GalleryComponent, about_component_1.AboutComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, manage_entry_component_1.ManageEntryComponent, blog_entry_component_1.BlogEntryComponent],
            styles: ["\n     nav a.active {\n        color: #039be5;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map