import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptor/http-token-interceptor';
import { MotherApiService } from './services/mother-api.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule,LazyElementsModule, BrowserAnimationsModule],
  providers: [
    MotherApiService,
    HttpTokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
