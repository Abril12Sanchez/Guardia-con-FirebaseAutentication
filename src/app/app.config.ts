import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {provideAuth, getAuth} from '@angular/fire/auth';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=>getAuth()),
    provideHttpClient(),
  
  ]
};
