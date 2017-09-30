import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../services/categories.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  categories: any[];
  posts: any[];

}
