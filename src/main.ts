import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Below are modules defined in my custom package available at:-
https://www.npmjs.com/package/@golibrary/shopping-cart-stenciljs */
import {
  applyPolyfills,
  defineCustomElements as defineProductMgmtExp
} from '@golibrary/shopping-cart-stenciljs/loader'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineProductMgmtExp(window);
});