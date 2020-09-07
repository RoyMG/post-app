import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _url: string = '/assets/data/posts.json';
  constructor(private http: HttpClient) {}

  posts: any = [];

  setLocalPost(posts) {
    this.posts = posts;
  }

  setPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this._url);
  }

  getPosts() {
    return this.posts;
  }

  getPostsByCat(cat: string) {
    if (cat === 'All') {
      return this.posts;
    }
    return this.posts.filter((post) => post.category === cat);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    return this.posts;
  }

  addOrEditPost(newPost: Post) {
    if (newPost.id === 0) {
      const max = this.posts.reduce((prev, current) =>
        prev.id > current.id ? prev : current
      );
      // console.log('max' + max.id);
      newPost.id = max.id + 1;
      this.posts = [...this.posts, newPost];
    } else {
      this.posts = this.posts.map((post) =>
        post.id !== newPost.id ? post : newPost
      );
    }

    return this.posts;
  }

  getPost(id: number) {
    return this.posts.filter((post) => post.id === id);
  }

  addComment(newComment: string, editPostComment: Post) {
    editPostComment.comments = [...editPostComment.comments, newComment];
    this.posts = this.posts.map((post) =>
      post.id !== editPostComment.id ? post : editPostComment
    );
    return editPostComment;
  }
}
