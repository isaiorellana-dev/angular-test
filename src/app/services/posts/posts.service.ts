import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Posts } from '../../models/posts.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  newPost(title: string, body: string) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
