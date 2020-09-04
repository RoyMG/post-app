import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post-list/post.service';
import { Post } from '../post-list/post.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() public newPost = new EventEmitter();
  selectedPost: Post = new Post();

  constructor(private _postService: PostService) {}

  ngOnInit(): void {}

  saveChanges() {
    // console.log(this.selectedPost);
    // this._postService.addOrEditPost(this.selectedPost);
    this.newPost.emit(this.selectedPost);
    this.selectedPost = new Post();
    document.getElementById('closeModal').click();
  }

  updatePost(post: Post) {
    console.log(post);
    this.selectedPost = post;
  }
}
