import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';// on the next releases it won't be necessary

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    disableDeprecatedForms(),     // Disable old Forms API!
    provideForms()  
]).catch((err: any) => console.error(err));
