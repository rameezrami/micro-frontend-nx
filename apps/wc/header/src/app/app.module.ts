import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent, APP_TAG } from './app.component';
import { HeaderApiService } from './services/header-api.service';
import { HttpTokenInterceptor } from './http/interceptor/http-token-interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNotes from './+state/notes.reducer';
import { NotesEffects } from './+state/notes.effects';
import { NotesFacade } from './+state/notes.facade';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([NotesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromNotes.NOTES_FEATURE_KEY, fromNotes.reducer),
  ],
  providers: [
    HeaderApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
    NotesFacade,
  ],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const headerApp = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define(APP_TAG, headerApp);
  }
}
