import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.css']
})
export class CategoryPostsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoriesService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe( params => {
        this.categoryService.getCategoryPosts(params.get('category'))
          .subscribe( res => this.categoryPosts = res.json());
    });
  }

  categoryPosts: any[];

}
