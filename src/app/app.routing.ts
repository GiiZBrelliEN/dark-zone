import { DiscussionComponent } from './discussion/discussion.component';
import { LoginComponent } from './login/login.component';
import { FacebookComponent } from './facebook/facebook.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const router: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: ':discussionVal', component: DiscussionComponent, outlet: 'discussion' } // path can be contained value
        ]
    },
    {
        path: 'youtube',
        component: YoutubeComponent
    },
    {
        path: 'facebook',
        component: FacebookComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule {}