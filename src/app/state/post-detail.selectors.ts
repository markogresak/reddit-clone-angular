import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailedPost } from '../detailed-post';
import { AppState } from './AppState';
import { State as PostDetailsState, PostState } from './post-detail.reducer';

const selectPostDetailsState = createFeatureSelector<
  AppState,
  PostDetailsState
>('postDetails');

export const selectPost = createSelector<
  AppState,
  { id: DetailedPost['id'] },
  PostDetailsState,
  PostState
>(selectPostDetailsState, (state, { id }) => state[id]);
