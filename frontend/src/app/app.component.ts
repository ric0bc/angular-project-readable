import { Component, OnInit } from '@angular/core';

import { CategoriesService } from './services/categories.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private CategoryService: CategoriesService,
    private PostService: PostService
  ) { }

  ngOnInit() {
    this.CategoryService.getCategories()
      .subscribe( res => this.categories = res.json().categories);
    this.PostService.getPosts()
      .subscribe( res => this.posts = res.json());
  }

  title = 'app';
  categories: any[];
  posts: any[];

}
