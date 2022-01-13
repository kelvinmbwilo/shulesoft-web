import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducerProvider, reducerToken} from "./store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {effects} from "./store/app.effect";
import {EffectsModule} from "@ngrx/effects";
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomSerializer} from "./store/router/router.reducer";
import {SharedModule} from "./shared/shared.module";
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainNavComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot(reducerToken, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    reducerProvider,
    {provide: RouterStateSerializer, useClass: CustomSerializer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
