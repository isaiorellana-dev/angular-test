import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from 'src/app/services/posts/posts.service';
import { Posts } from '../../models/posts.models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private postsService: PostsService, private router: Router) {}

  posts: Posts[] = [];

  correo = localStorage.getItem('user')?.replace(/['"]+/g, '');

  ngOnInit(): void {
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['/auth/login']);
    } else {
      this.postsService.getPosts().subscribe((data) => {
        this.posts = data;
      });
    }
  }

  edit(id: number) {
    this.router.navigate(['edit/' + id]);
  }

  newPost() {
    this.router.navigate(['add']);
  }
}
