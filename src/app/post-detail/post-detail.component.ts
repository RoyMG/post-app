import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post-list/post.service';
import { Post } from '../post-list/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    if (id) {
      this.getPost(id);
    }
  }

  getPost(id: number) {
    this.post = this.postService.getPost(id)[0];
  }
  onBack() {
    this.router.navigate(['']);
  }

  addComment() {
    this.post = this.postService.addComment(this.newComment, this.post);
    this.newComment = '';
  }
}
