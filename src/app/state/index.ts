import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from './AppState';
import { reducer as postsReducer } from './posts.reducer';
import { reducer as postDetailsReducer } from './post-detail.reducer';

export const reducers: ActionReducerMap<AppState> = {
  posts: postsReducer,
  postDetails: postDetailsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
