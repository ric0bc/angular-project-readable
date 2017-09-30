import { Component, OnInit } from '@angular/core';

import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private CategoryService: CategoriesService) { }

  ngOnInit() {
    this.CategoryService.getCategories()
      .subscribe( res => this.categories = res.json().categories);
  }

  title = 'app';
  categories: any[];

}
