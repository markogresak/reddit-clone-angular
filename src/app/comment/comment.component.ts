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
  @Input() isNested: boolean = false;
  @Input() hideNested: boolean = false;

  childComments: Comment[];
  collapsed: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.childComments = this.allComments.filter(
      (comment) => comment.parent_comment_id === this.comment.id,
    );
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
