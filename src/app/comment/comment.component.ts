import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() allComments: Comment[];
  @Input() isNested = false;
  @Input() hideNested = false;

  childComments: Comment[];
  collapsed = false;

  constructor() {}

  ngOnInit(): void {
    this.childComments = this.allComments.filter(
      (comment) => comment.parent_comment_id === this.comment.id,
    );
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
