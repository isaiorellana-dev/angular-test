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

  getOne(id: string) {
    return this.http.get<Posts>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }

  editPost(id: number, title: string, body: string) {
    return this.http.put<Posts>(
      'https://jsonplaceholder.typicode.com/posts/' + id,
      {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
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
