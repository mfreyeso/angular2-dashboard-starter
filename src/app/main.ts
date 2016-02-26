import { bootstrap } from 'angular2/platform/browser';
import { bind, ComponentRef } from 'angular2/core';
import { FORM_PROVIDERS } from "angular2/common";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AppComponent } from './app.component';
import { Auth } from './auth/auth';
import { appInjector } from './auth/app_injector';

bootstrap(AppComponent, [
    Auth,
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    (appRef: ComponentRef) => {
      appInjector(appRef.injector);
    },
    error => console.log(error)
);
