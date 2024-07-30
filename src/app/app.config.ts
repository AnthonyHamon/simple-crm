import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideClientHydration(),
  provideAnimationsAsync(),
  importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-1de80", "appId": "1:983220487756:web:104cc1d7ff50a8114596e9", "storageBucket": "simple-crm-1de80.appspot.com", "apiKey": "AIzaSyA4BsAyREspPfoIbMe1VEk-xTgvomGN98g", "authDomain": "simple-crm-1de80.firebaseapp.com", "messagingSenderId": "983220487756" }))),
  importProvidersFrom(provideFirestore(() => getFirestore()))]
};
