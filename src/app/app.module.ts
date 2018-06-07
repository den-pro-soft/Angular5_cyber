import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { RequestInterceptor } from '@app/service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedModule } from '@app/modules';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FixedModule,
    AppRoutingModule,
    HttpClientModule,
    LocalStorageModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
