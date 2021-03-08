import { createReducer, on } from '@ngrx/store';
import { Post } from '../post';
import { loadPosts, loadPostsFailure, loadPostsSuccess } from './posts.actions';

export const postFeatureKey = 'posts';

export interface State {
  error: string | null;
  isLoading: boolean;
  posts: Post[];
}

export const initialState: State = {
  error: null,
  isLoading: false,
  posts: [],
};

export const reducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadPostsSuccess, (state, { data }) => ({
    ...state,
    error: null,
    isLoading: false,
    posts: data,
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    error: error.message,
    isLoading: false,
    posts: [],
  })),
);
