import { RoutingModule } from './app.routing'; // Router Modding // add forRouting
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
=======
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FacebookComponent } from './facebook/facebook.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { DiscussionComponent } from './discussion/discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FacebookComponent,
    YoutubeComponent,
    DiscussionComponent
>>>>>>> e9438ca18a4402870a9db4383b87d59a0a91ed1e
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
