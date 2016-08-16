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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var user_service_1 = require('../services/user.service');
var LoginComponent = (function () {
    function LoginComponent(router, http, userService) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.values = new Hero();
        this.title = 'hola';
    }
    /* eventually drop this code
    login(event, username, password) {
        event.preventDefault();
        let email = 'admin@test.com';
        password = 'admin@test.com';
        let confirmpassword = 'admin@test.com';
        let body2 = "grant_type=password&username=admin@test.com&password=$Test1234";
        let body = JSON.stringify({ username: email, password: password, grant_type: 'password' });
        this.http.post('http://localhost:50464/Token', body2, { headers: contentHeaders })
            .subscribe(
            response => {
                localStorage.setItem('tok', response.json().access_token);
                let tok = localStorage['tok'];
                this.router.navigate(['/dashboard']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }
    */
    LoginComponent.prototype.login = function (event, username, password) {
        var _this = this;
        this.userService
            .login(username, password)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'gallery',
            templateUrl: 'app/components/login.component.html',
            providers: [
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=login.component.js.map