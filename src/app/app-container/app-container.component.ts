import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post-list/post.service';
import { Post } from '../post-list/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css'],
})
export class AppContainerComponent implements OnInit {
  catSelected = '';
  subscription: Subscription;
  posts = [];
  updatePost: Post = new Post();
  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    if (this._postService.posts.length == 0) {
      this.subscription = this._postService.setPosts().subscribe((data) => {
        this.posts = data;
        this._postService.setLocalPost(data);
      });
    } else {
      this.posts = this._postService.getPosts();
    }
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

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
