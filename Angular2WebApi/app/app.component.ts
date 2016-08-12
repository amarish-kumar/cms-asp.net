import { Component, DoCheck } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { BlogComponent } from './components/blog.component';
import { GalleryComponent } from './components/gallery.component';
import { AboutComponent } from './components/about.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { isLoggedin } from './logged-in.guard';

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
export class AppComponent implements DoCheck {
    title = 'App';
    authorize = false;
    constructor(private router: Router) {       
    }

    ngDoCheck() {
        this.authorize = isLoggedin();
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
        this.authorize = isLoggedin();
        this.router.navigate(['/']);
    }
}