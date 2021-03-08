import { createAction, props } from '@ngrx/store';
import { Post } from '../post';

export const loadPosts = createAction('[Posts] Load Posts');

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ data: Post[] }>(),
);

export const loadPostsFailure = createAction(
  '[Posts] Load Posts Failure',
  props<{ error: Error }>(),
);
