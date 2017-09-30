import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CategoriesService {

  constructor(private http: Http) { }

  private url = 'http://localhost:3001';
  private postOptions = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'something'
    })
  });

  getCategories () {
    const options = new RequestOptions({
      headers: new Headers({
        'Authorization': 'something'
      })
    });

    return this.http.get(`${this.url}/categories`, options);
  }

  getCategoryPosts(category) {
    return this.http.get(`${this.url}/${category}/posts`, this.postOptions);
  }

}
