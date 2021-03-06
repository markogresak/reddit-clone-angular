import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailedPost } from '../detailed-post';
import { Comment } from '../comment';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: DetailedPost;
  topLevelComments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.postService.getPost(this.id).subscribe((post) => {
      this.post = post;
      this.topLevelComments = post.comments.filter(
        (comment) => comment.parent_comment_id === null,
      );
    });
  }

  get id(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
}
