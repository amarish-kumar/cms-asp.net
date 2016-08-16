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
var Rx_1 = require('rxjs/Rx');
var GalleryService = (function () {
    function GalleryService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:50464/api/values';
        // private heroesUrl = 'app/heroes';
        this.baseUrl = 'http://swapi.co/api';
    }
    GalleryService.prototype.getValues = function () {
        var people$ = this.http
            .get(this.heroesUrl, { headers: this.getHeaders2() })
            .map(mapValue)
            .catch(handleError);
        return people$;
    };
    GalleryService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GalleryService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    GalleryService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json;charset=UTF-8');
        headers.append('Authorization', 'Bearer ' + localStorage['auth_token']);
        return headers;
    };
    GalleryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GalleryService);
    return GalleryService;
}());
exports.GalleryService = GalleryService;
function mapValues(response) {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');
    // The response of the API has a results
    // property with the actual results
    return response.json(); //.results.map(toVal)
}
function mapValue(response) {
    // toPerson looks just like in the previous example
    console.log('Parsed val:', response.json());
    return response.json();
}
function toVal(r) {
    var val = ({
        id: r,
        name: r.name,
    });
    console.log('Parsed val:', val);
    return val;
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sofisticated
    var errorMsg = error.message || "Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=gallery.service.js.map