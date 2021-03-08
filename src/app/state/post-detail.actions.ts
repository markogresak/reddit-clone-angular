import { createAction, props } from '@ngrx/store';
import { DetailedPost } from '../detailed-post';

export const loadPostDetails = createAction(
  '[PostDetail] Load PostDetails',
  props<{ id: DetailedPost['id'] }>(),
);

export const loadPostDetailsSuccess = createAction(
  '[PostDetail] Load PostDetails Success',
  props<{ id: DetailedPost['id']; data: DetailedPost }>(),
);

export const loadPostDetailsFailure = createAction(
  '[PostDetail] Load PostDetails Failure',
  props<{ id: DetailedPost['id']; error: Error }>(),
);
