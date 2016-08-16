"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./components/dashboard.component');
var blog_component_1 = require('./components/blog.component');
var gallery_component_1 = require('./components/gallery.component');
var about_component_1 = require('./components/about.component');
var blog_entry_component_1 = require('./components/blog-entry.component');
var login_component_1 = require('./components/login.component');
var register_component_1 = require('./components/register.component');
var manage_entry_component_1 = require('./components/manage-entry.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'blog',
        component: blog_component_1.BlogComponent
    },
    {
        path: 'gallery',
        component: gallery_component_1.GalleryComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'blog-entry/:id',
        component: blog_entry_component_1.BlogEntryComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'manage-entry',
        component: manage_entry_component_1.ManageEntryComponent
    },
    {
        path: 'manage-entry/:id',
        component: manage_entry_component_1.ManageEntryComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map