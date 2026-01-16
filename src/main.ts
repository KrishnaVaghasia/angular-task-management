import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// import { AppModule } from './app/app.module';
// import {platformBrowserDynamic} from '@angular/platfrom-browser-dynamic'; //for module based components not standalone

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule);
