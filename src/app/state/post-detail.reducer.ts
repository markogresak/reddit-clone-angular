import { createReducer, on } from '@ngrx/store';
import { DetailedPost } from '../detailed-post';
import {
  loadPostDetails,
  loadPostDetailsFailure,
  loadPostDetailsSuccess,
} from './post-detail.actions';

export const postDetailFeatureKey = 'postDetail';

export type State = Record<DetailedPost['id'], PostState>;

export interface PostState {
  error: string | null;
  isLoading: boolean;
  topLevelComments: DetailedPost['comments'];
  value: DetailedPost | undefined;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(loadPostDetails, (state, { id }) => ({
    ...state,
    [id]: {
      ...state[id],
      error: null,
      isLoading: true,
    },
  })),
  on(loadPostDetailsSuccess, (state, { id, data }) => ({
    ...state,
    [id]: {
      ...state[id],
      error: null,
      isLoading: false,
      value: data,
      topLevelComments: data.comments.filter(
        (comment) => comment.parent_comment_id === null,
      ),
    },
  })),
  on(loadPostDetailsFailure, (state, { id, error }) => ({
    ...state,
    [id]: {
      ...state[id],
      error: error.message,
      isLoading: false,
      value: undefined,
      topLevelComments: [],
    },
  })),
);
