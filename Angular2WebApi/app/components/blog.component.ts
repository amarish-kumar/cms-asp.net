import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'blog',
    templateUrl: 'app/components/blog.component.cshtml',
    styleUrls: ['app/components/blog.component.css'],
})

export class BlogComponent {
    
    constructor(private router: Router) { }
    gotoDetail(selectedHero) {
        this.router.navigate(['/blog-entry', selectedHero]);
    }
}