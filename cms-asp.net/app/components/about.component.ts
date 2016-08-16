import { Component } from '@angular/core';
import { isLoggedin } from '../logged-in.guard';
import { Router } from '@angular/router';

@Component({
    selector: 'about',
    template: `<h1>{{Title}}</h1>
<p myHighlight>I am green with envy!</p>
`
})


export class AboutComponent {
    Title = 'adios';
    
       
    
}