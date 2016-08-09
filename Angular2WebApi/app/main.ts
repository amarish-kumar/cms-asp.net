import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { Http, HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS
]);
