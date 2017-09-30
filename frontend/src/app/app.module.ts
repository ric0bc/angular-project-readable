import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryPostsComponent } from './category-posts/category-posts.component'
import { CategoriesService } from './services/categories.service'
import { PostService } from './services/post.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'category/:category', component: CategoryPostsComponent }
    ])
  ],
  providers: [
    CategoriesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
