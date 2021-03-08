import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { AppState } from '../state/AppState';
import { loadPosts, loadPostsSuccess } from '../state/posts.actions';
import { selectPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$ = this.store.pipe(select(selectPosts));

  constructor(
    private postService: PostService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.store.dispatch(loadPosts());
    this.postService.getPosts().subscribe((posts) => {
      this.store.dispatch(loadPostsSuccess({ data: posts }));
    });
  }
}
