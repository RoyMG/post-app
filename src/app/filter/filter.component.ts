import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../post-list/post.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() public catSet = new EventEmitter();

  constructor(private _postService: PostService) {}
  categories: string[] = [];
  ngOnInit(): void {
    this.categories = ['All', 'Cat-1', 'Cat-2', 'Cat-3', 'Cat-4'];
  }
  catSelected(cat: string) {
    this.catSet.emit(cat);
  }
}
