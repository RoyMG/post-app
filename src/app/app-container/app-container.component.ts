import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post-list/post.service';
import { Post } from '../post-list/post.model';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css'],
})
export class AppContainerComponent implements OnInit {
  catSelected = '';
  posts: Post[] = [];
  updatePost: Post = new Post();
  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.posts = this._postService.getPosts();
  }

  getCategory(cat: string) {
    this.posts = this._postService.getPostsByCat(cat);
  }
  deletePost(id: number) {
    this.posts = this._postService.deletePost(id);
  }

  addOrEditPost(newPost: Post) {
    this.posts = this._postService.addOrEditPost(newPost);
  }
}
