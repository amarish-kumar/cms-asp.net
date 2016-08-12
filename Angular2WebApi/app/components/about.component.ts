import { Component } from '@angular/core';
import { isLoggedin } from '../logged-in.guard';
import { Router } from '@angular/router';

@Component({
    selector: 'about',
    template: '<h1>{{Title}}</h1>'
})


export class AboutComponent {
    Title = 'adios';
    
       
    
}