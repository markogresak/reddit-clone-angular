import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { FromNowPipe } from './from-now.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostItemComponent } from './post-item/post-item.component';
import { DomainOnlyPipe } from './domain-only.pipe';
import { CommentComponent } from './comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

const extModules = environment.production
  ? []
  : [
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      }),
    ];

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    FromNowPipe,
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    LogoutComponent,
    NewPostComponent,
    PostDetailComponent,
    PostItemComponent,
    DomainOnlyPipe,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    ...extModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
