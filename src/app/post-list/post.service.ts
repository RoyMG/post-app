import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  posts: Post[] = [
    {
      id: 1,
      title: 'Title 1',
      category: 'Cat-1',
      preview:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, atque! Est ab, in molestias eius optio eaque debitis ea quaerat.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio itaque id quis recusandae expedita totam mollitia deleniti officiis aperiam. Laboriosam rem non aliquid ducimus placeat, voluptatum saepe exercitationem dolorem autem aliquam blanditiis labore iure, soluta dolores. Quos fuga tempora laudantium, impedit est a laboriosam error aspernatur. Dicta, omnis incidunt.',
      image: 'https://picsum.photos/300/200?random=1',
      comments: [],
    },
    {
      id: 2,
      title: 'Title 2',
      category: 'Cat-2',
      preview:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, atque! Est ab, in molestias eius optio eaque debitis ea quaerat.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio itaque id quis recusandae expedita totam mollitia deleniti officiis aperiam. Laboriosam rem non aliquid ducimus placeat, voluptatum saepe exercitationem dolorem autem aliquam blanditiis labore iure, soluta dolores. Quos fuga tempora laudantium, impedit est a laboriosam error aspernatur. Dicta, omnis incidunt.',
      image: 'https://picsum.photos/300/200?random=2',
      comments: ['comment 1', 'comment 2', 'comment 3'],
    },
    {
      id: 3,
      title: 'Title 3',
      category: 'Cat-3',
      preview:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, atque! Est ab, in molestias eius optio eaque debitis ea quaerat.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio itaque id quis recusandae expedita totam mollitia deleniti officiis aperiam. Laboriosam rem non aliquid ducimus placeat, voluptatum saepe exercitationem dolorem autem aliquam blanditiis labore iure, soluta dolores. Quos fuga tempora laudantium, impedit est a laboriosam error aspernatur. Dicta, omnis incidunt.',
      image: 'https://picsum.photos/300/200?random=3',
      comments: [],
    },
    {
      id: 4,
      title: 'Title 4',
      category: 'Cat-4',
      preview:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, atque! Est ab, in molestias eius optio eaque debitis ea quaerat.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio itaque id quis recusandae expedita totam mollitia deleniti officiis aperiam. Laboriosam rem non aliquid ducimus placeat, voluptatum saepe exercitationem dolorem autem aliquam blanditiis labore iure, soluta dolores. Quos fuga tempora laudantium, impedit est a laboriosam error aspernatur. Dicta, omnis incidunt.',
      image: 'https://picsum.photos/300/200?random=4',
      comments: ['comment 1', 'comment 2', 'comment 3'],
    },
  ];

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
