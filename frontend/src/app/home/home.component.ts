import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(

    private PostService: PostService
  ) { }

  ngOnInit() {

    this.PostService.getPosts()
      .subscribe( res => this.posts = res.json());
  }

  
  posts: any[];

}
