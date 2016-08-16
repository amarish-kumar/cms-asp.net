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
var headers_1 = require('../common/headers');
var RegisterComponent = (function () {
    function RegisterComponent(router, http) {
        this.router = router;
        this.http = http;
        this.values = new Hero();
        this.title = 'hola';
    }
    RegisterComponent.prototype.register = function (event, email, password, confirmPassword) {
        var _this = this;
        event.preventDefault();
        confirmPassword = '$Test1234';
        var body = JSON.stringify({ email: email, password: password, confirmPassword: confirmPassword });
        this.http.post('http://localhost:50464/api/Account/Register', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            _this.router.navigate(['/login']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/components/register.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=register.component.js.map