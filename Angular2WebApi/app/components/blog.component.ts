import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { isLoggedin } from '../logged-in.guard';

@Component({
    selector: 'blog',
    templateUrl: 'app/components/blog.component.html',
    styleUrls: ['app/components/blog.component.css'],
})

export class BlogComponent implements DoCheck {
    authorize = false;
    constructor(private router: Router) { }
    ngDoCheck() {
        this.authorize = isLoggedin();
    }
    gotoDetail(selectedHero) {
        this.router.navigate(['/blog-entry', selectedHero]);
    }
}