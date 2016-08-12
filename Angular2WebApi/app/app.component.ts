import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { BlogComponent } from './components/blog.component';
import { GalleryComponent } from './components/gallery.component';
import { AboutComponent } from './components/about.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { Token } from './common/tokens';

@Component({
    selector: 'my-app',
    templateUrl: 'app/component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [DashboardComponent, BlogComponent, GalleryComponent, AboutComponent, LoginComponent, RegisterComponent],
    styles: [`
     nav a.active {
        color: #039be5;
    }
`]
})
export class AppComponent {
    title = 'App';
    token
    constructor(private router: Router) {
        this.token = localStorage['auth_token'];
    }
    gotoLogin() {
        this.router.navigate(['/login']);
    }
    gotoRegister() {
        this.router.navigate(['/register']);
    }

    logOut() {
        console.log(localStorage['auth_token']);
        localStorage.removeItem("auth_token");
        this.token = undefined;
        this.router.navigate(['/']);
    }
}