import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';
import { switchMap } from 'rxjs/operators';
import { Posts } from '../../models/posts.models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {}
  postId: string | null = null;
  post: Posts = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  formValidate() {
    return this.post.title.length > 2 && this.post.body.length > 2;
  }

  data: any;

  postEdited: {
    title: string;
    body: string;
  } = {
    title: '',
    body: '',
  };

  edited: boolean = false;

  savePostEdited() {
    return this.postsService
      .editPost(this.post.id, this.post.title, this.post.body)
      .subscribe((d) => {
        this.data = d;
        console.log(d);
        let newItem = JSON.parse(this.data.body);
        this.postEdited = newItem;
        this.edited = true;
        this.post = {
          userId: 0,
          id: 0,
          title: '',
          body: '',
        };
      });
  }

  goHome() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.postId = params.get('id');
          if (this.postId) {
            return this.postsService.getOne(this.postId);
          }
          return [null];
        })
      )
      .subscribe((data) => {
        if (data) {
          this.post = data;
        }

        // console.log(this.post);
      });
  }
}
