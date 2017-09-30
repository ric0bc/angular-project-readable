import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  private url = 'http://localhost:3001';

  getPosts() {
    const options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'something'
      })
    });

    return this.http.get(`${this.url}/posts`, options);
  }

}
