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
import { DomainOnlyPipe } from './domain-only.pipe';

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
    DomainOnlyPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
