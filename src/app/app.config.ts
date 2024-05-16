import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UniqueIdService } from './shared/services/unique-id/unique-id.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  ]
};
