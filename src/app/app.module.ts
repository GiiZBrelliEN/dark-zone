import { RoutingModule } from './app.routing'; // Router Modding // add forRouting
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule // add forRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
