import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.isLoading = true;
    this.postService.getPosts().subscribe((posts) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }
}
