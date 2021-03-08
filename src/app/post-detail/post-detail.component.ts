import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostService } from '../post.service';
import { AppState } from '../state/AppState';
import {
  loadPostDetails,
  loadPostDetailsFailure,
  loadPostDetailsSuccess,
} from '../state/post-detail.actions';
import { selectPost } from '../state/post-detail.selectors';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post$ = this.store.pipe(
    select((state) => selectPost(state, { id: this.id })),
  );

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.getPost(this.id);
  }

  private getPost(id: number): void {
    this.store.dispatch(loadPostDetails({ id }));
    this.postService
      .getPost(id)
      .pipe(
        catchError((error: any) => {
          this.store.dispatch(loadPostDetailsFailure({ id, error }));
          return of(undefined);
        }),
      )
      .subscribe((post) => {
        if (post) {
          this.store.dispatch(loadPostDetailsSuccess({ id, data: post.data }));
        }
      });
  }

  private get id(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
}
