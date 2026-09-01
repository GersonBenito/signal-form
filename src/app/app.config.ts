import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppTitleStrategy } from '@core/functions/app-title.strategy';
import { provideSignalFormsConfig } from '@angular/forms/signals';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy
    },
    provideSignalFormsConfig({
      classes: {
        'is-invalid': ({state}) => state().touched() && state().invalid(),
        'is-disabled': ({state}) => state().disabled(),
        'is-touched': ({state}) => state().touched(),
      }
    })
  ]
};
