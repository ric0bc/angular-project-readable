import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesService } from './services/categories.service'
import { PostService } from './services/post.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CategoriesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
