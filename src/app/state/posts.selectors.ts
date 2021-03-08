import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './AppState';
import { State as PostsState } from './posts.reducer';

const selectPostsState = createFeatureSelector<AppState, PostsState>('posts');

export const selectPosts = createSelector(selectPostsState, (state) => state);
