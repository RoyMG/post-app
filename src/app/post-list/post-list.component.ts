import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input('post') posts;
  @Output() public updatePost = new EventEmitter();

  copyPost: Post = new Post();

  constructor(private _postService: PostService) {}

  ngOnInit(): void {}

  deletePost(id: number) {
    this.posts = this._postService.deletePost(id);
  }

  getUpdate(post: Post) {
    this.copyPost = { ...post };
    this.updatePost.emit(this.copyPost);
  }
}
