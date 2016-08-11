import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { BlogComponent } from './components/blog.component';
import { GalleryComponent } from './components/gallery.component';
import { AboutComponent } from './components/about.component';
import { BlogEntryComponent } from './components/blog-entry.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'blog-entry/:id',
        component: BlogEntryComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
