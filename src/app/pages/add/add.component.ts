import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Posts } from '../../models/posts.models';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  newPostForm: {
    title: string;
    body: string;
  };

  postCreated: {
    title: string;
    body: string;
  } = {
    title: '',
    body: '',
  };

  constructor(private router: Router, private postsService: PostsService) {
    this.newPostForm = {
      title: '',
      body: '',
    };
  }

  formValidate() {
    return (
      this.newPostForm.title.length > 2 && this.newPostForm.body.length > 2
    );
  }
  data: any;

  createPost() {
    return this.postsService
      .newPost(this.newPostForm.title, this.newPostForm.body)
      .subscribe((d) => {
        this.data = d;
        let newItem = JSON.parse(this.data.body);
        this.postCreated = newItem;
        this.newPostForm = {
          title: '',
          body: '',
        };
      });
  }
  goHome() {
    this.router.navigate(['']);
  }
  ngOnInit(): void {}
}
